<template>
  <div class="mb-3 md:mb-0">
    <div class="w-20">
      <img src="/assets/img/logo.svg" />
    </div>

    <h1
      class="mt-8 text-2xl font-semibold tracking-tighter text-gray-700 sm:text-3xl title-font dark:text-gray-300"
    >
      {{ $t("login_to_account") }}
    </h1>
    <form
      class="mt-6"
      @submit.prevent="login"
      @keydown="form.onKeydown($event)"
    >
      <div>
        <ui-input-validation
          :label="$t('email')"
          v-model="form.email"
          name="email"
          :form="form"
          input-type="email"
          :is-autofocus="true"
          :is-required="true"
          :is-auto-complete="true"
        />
      </div>
      <div class="mt-3">
        <ui-input-validation
          :label="$t('password')"
          v-model="form.password"
          input-type="password"
          name="password"
          :form="form"
          min-length="6"
          :is-required="true"
        />
      </div>

      <div class="mt-4 flex justify-between items-center">
         <ui-checkbox v-model="remember" name="remember" class="text-sm">
          {{ $t("remember_me") }}
        </ui-checkbox>
          <router-link
          :to="{ name: 'password.request' }"
          class="text-sm font-semibold leading-relaxed text-gray-600 hover:text-gray-900 focus:text-blue-700 dark:text-gray-300 dark:hover:text-gray-200"
        >
          {{ $t("forgot_password") }}
        </router-link>
      </div>   

      <ui-button class="mt-6" :loading="form.busy"> {{ $t("login") }} </ui-button>
    </form>
    <div class="flex w-full items-center justify-center py-4 xl:py-6 text-xs">
      <span class="w-2/5 border-b border-gray-300 dark:border-gray-600"></span>
      <span class="w-1/5 text-center text-gray-700 dark:text-gray-400"
        >or with</span
      >
      <span class="w-2/5 border-b border-gray-300 dark:border-gray-600"></span>
    </div>
    <div class="flex justify-enter">
      <button
        type="button"
        class="inline-flex w-full px-4 py-3 font-semibold text-gray-600 border border-gray-300 rounded-lg bg-blue-1300 transition duration-300 ease-in-out transform hover:bg-gray-600 hover:text-white hover:border-transparent focus:bg-gray-100 dark:border-gray-600"
      >
        <div class="flex items-center justify-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="w-6 h-6"
            viewBox="0 0 48 48"
          >
            <defs>
              <path
                id="a"
                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
              />
            </defs>
            <clipPath id="b">
              <use xlink:href="#a" overflow="visible" />
            </clipPath>
            <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
            <path
              clip-path="url(#b)"
              fill="#EA4335"
              d="M0 11l17 13 7-6.1L48 14V0H0z"
            />
            <path
              clip-path="url(#b)"
              fill="#34A853"
              d="M0 37l30-23 7.9 1L48 0v48H0z"
            />
            <path
              clip-path="url(#b)"
              fill="#4285F4"
              d="M48 48L17 24l-4-3 35-10z"
            />
          </svg>
          <span class="ml-4 dark:text-gray-300">
            {{ $t("login_with_google") }}
          </span>
        </div>
      </button>
    </div>

    <p class="mt-8 text-center text-gray-700 dark:text-gray-500">
      {{ $t("not_a_member") }}
      <router-link
        :to="{ name: 'register' }"
        class="font-semibold text-gray-600 hover:text-gray-900 focus:text-blue-700 dark:text-gray-300 dark:hover:text-gray-200"
        >{{ $t("sign_up_now") }}
      </router-link>
    </p>
  </div>
</template>

<script>
import Form from "vform";
import Cookies from "js-cookie";
import LoginWithGithub from "~/components/LoginWithGithub";

export default {
  components: {
    LoginWithGithub,
  },
  layout: "authLayout",
  middleware: "guest",

  metaInfo() {
    return { title: this.$t("login") };
  },

  data: () => ({
    form: new Form({
      email: "",
      password: "",
    }),
    remember: false,
  }),

  methods: {
    async login() {
      // Submit the form.
      const { data } = await this.form.post("/api/login");

      // Save the token.
      this.$store.dispatch("auth/saveToken", {
        token: data.token,
        remember: this.remember,
      });

      // Fetch the user.
      await this.$store.dispatch("auth/fetchUser");

      // Redirect home.
      this.redirect();
    },

    redirect() {
      const intendedUrl = Cookies.get("intended_url");

      if (intendedUrl) {
        Cookies.remove("intended_url");
        this.$router.push({ path: intendedUrl });
      } else {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>
