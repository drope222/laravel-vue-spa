<template>
  <div>
    <div>
     
        <input
          :id="id || name"
          :name="name"
          :checked="internalValue"
          @click="handleClick"
          type="checkbox"
          class="input-checkbox"
        />
         <label :for="id || name" class="inline-flex items-center align-middle">
        <span class="ml-1 text-gray-700  dark:text-gray-300"><slot /></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkbox",

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
