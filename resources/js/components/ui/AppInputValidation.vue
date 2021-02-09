<template>
  <div class="group">
    <label
      :for="name"
      v-if="label !== ''"
      class="block text-sm font-medium leading-relaxed tracking-tighter text-gray-700 dark:text-gray-300"
      >{{ label }}</label
    >
    <input
      :id="name"
      :value="value"
      @input="updateValue($event.target.value)"
      :type="inputType"
      :placeholder="placeholder"
      class="w-full px-4 py-2 mt-1 text-base text-gray-700 border-transparent transition-shadow duration-200 rounded-lg focus:bg-white hover:bg-white"
      :class="[
        {
          'bg-gray-100 focus:border-gray-400 focus:border-opacity-60 ring-gray-300 ring-opacity-30 focus:ring focus:ring-gray-300 focus:ring-opacity-50 hover:ring  dark:bg-gray-800 dark:text-gray-300  hover:border-gray-300 hover:border-opacity-50': !form.errors.has(
            name
          ),
        },
        {
          'bg-red-100 bg-opacity-70 ring-red-100 ring-opacity-50 hover:border-red-100 hover:ring focus:border-red-300 focus:border-opacity-70 focus:ring focus:ring-red-100 focus:ring-opacity-50': form.errors.has(
            name
          ),
        },
      ]"
      :autofocus="isAutofocus"
      :autocomplete="isAutoComplete"
      :required="isRequired"
      :minlength="minLength"
    />
    <has-error
      class="mt-2 ml-1 text-sm text-red-500 text-opacity-80"
      :form="form"
      :field="name"
    />
  </div>
</template>

<script>
export default {
  name: "UiInputValidation",

  props: {
    value: {
      type: String,
    },

    inputType: {
      type: String,
      default: "text",
    },

    name: {
      type: String,
      required: true,
    },

    loading: {
      type: Boolean,
      default: false,
    },

    placeholder: {
      type: String,
      default: "",
    },

    form: {
      type: Object,
      required: true,
    },

    label: {
      type: String,
      default: "",
    },

    isAutofocus: {
      type: Boolean,
      default: false,
    },

    isAutoComplete: {
      type: Boolean,
      default: false,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    minLength: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
      if (this.form.errors.has(this.name)) {
        this.form.errors.clear(this.name);
      }
    },
  },
};
</script>
