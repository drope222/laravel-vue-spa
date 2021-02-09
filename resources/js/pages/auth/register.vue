<template>
  <div >
    <card v-if="mustVerifyEmail" :title="$t('register')">
      <div class="alert alert-success" role="alert">
        {{ $t("verify_email_address") }}
      </div>
    </card>
    <div class="w-20">
      <img src="/assets/img/logo.svg" />
    </div>

    <h1
      class="mt-8 text-2xl font-semibold tracking-tighter text-gray-700 sm:text-3xl title-font dark:text-gray-300"
    >
      {{ $t("sign_up") }}
    </h1>

    <div class="mt-6 flex justify-enter">
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
    <div class="flex w-full items-center justify-center py-4 xl:py-6 text-xs">
      <span class="w-2/5 border-b border-gray-300 dark:border-gray-600"></span>
      <span class="w-1/5 text-center text-gray-700 dark:text-gray-400">or</span>
      <span class="w-2/5 border-b border-gray-300 dark:border-gray-600"></span>
    </div>

    <form @submit.prevent="register" @keydown="form.onKeydown($event)">
      <!-- Name -->
      <div>
        <div class="mt-1">
          <ui-input-validation
            :label="$t('name')"
            v-model="form.name"
            name="name"
            :form="form"
            input-type="text"
            :is-required="true"
            :is-autofocus="true"
          />
        </div>
      </div>

      <!-- Email -->
      <div class="mt-3">
        <ui-input-validation
          :label="$t('email')"
          v-model="form.email"
          name="email"
          :form="form"
          input-type="email"
          :is-required="true"
          :is-auto-complete="true"
        />
      </div>

      <!-- Password -->
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

      <div class="mt-4">
        <ui-checkbox name="policy-checker">
          <span class="text-sm leading-none"
            >Creating an account means you’re okay with our Terms of Service,
            <router-link
              :to="{ name: 'welcome' }"
              class="font-semibold text-gray-600 hover:text-gray-900 focus:text-blue-700 dark:text-gray-300 dark:hover:text-gray-200"
              >Privacy Policy</router-link>.</span>
        </ui-checkbox>
      </div>
      <div class="mt-5">
        <div>
          <!-- Submit Button -->
          <ui-button :loading="form.busy">
            {{ $t("register") }}
          </ui-button>

          <!-- GitHub Register Button -->
          <login-with-github />
        </div>
      </div>
    </form>

    <p class="mt-8 text-center text-gray-700 dark:text-gray-500">
      {{ $t("is_member") }}
      <router-link
        :to="{ name: 'login' }"
        class="font-semibold text-gray-600 hover:text-gray-900 focus:text-blue-700 dark:text-gray-300 dark:hover:text-gray-200"
        >{{ $t("sign_in") }}
      </router-link>
    </p>
    
  </div>
</template>

<script>
import Form from "vform";
import LoginWithGithub from "~/components/LoginWithGithub";

export default {
  components: {
    LoginWithGithub,
  },
  layout: "authLayout",
  middleware: "guest",

  metaInfo() {
    return { title: this.$t("register") };
  },

  data: () => ({
    form: new Form({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    }),
    mustVerifyEmail: false,
  }),

  methods: {
    async register() {
      // Register the user.
      const { data } = await this.form.post("/api/register");

      // Must verify email fist.
      if (data.status) {
        this.mustVerifyEmail = true;
      } else {
        // Log in the user.
        const {
          data: { token },
        } = await this.form.post("/api/login");

        // Save the token.
        this.$store.dispatch("auth/saveToken", { token });

        // Update the user.
        await this.$store.dispatch("auth/updateUser", { user: data });

        // Redirect home.
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>
