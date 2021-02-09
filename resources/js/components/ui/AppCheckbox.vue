<template>
  <div>
    <div class="flex  align-middle leading-none">
     
        <input
          :id="id || name"
          :name="name"
          :checked="internalValue"
          @click="handleClick"
          type="checkbox"
          class="cursor-pointer rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-white text-gray-700 focus:ring-1 focus:ring-offset-0 focus:ring-gray-500 dark:bg-gray-800"
        />
         <label :for="id || name" class="ml-2 cursor-pointer text-gray-700  dark:text-gray-300">
        <slot />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiCheckbox",

  props: {
    id: { type: String, default: null },
    name: { type: String, default: "checkbox" },
    value: { type: Boolean, default: false },
    checked: { type: Boolean, default: false },
  },

  data: () => ({
    internalValue: false,
  }),

  watch: {
    value(val) {
      this.internalValue = val;
    },

    checked(val) {
      this.internalValue = val;
    },

    internalValue(val, oldVal) {
      if (val !== oldVal) {
        this.$emit("input", val);
      }
    },
  },

  created() {
    this.internalValue = this.value;

    if ("checked" in this.$options.propsData) {
      this.internalValue = this.checked;
    }
  },

  methods: {
    handleClick(e) {
      this.$emit("click", e);

      if (!e.isPropagationStopped) {
        this.internalValue = e.target.checked;
      }
    },
  },
};
</script>
