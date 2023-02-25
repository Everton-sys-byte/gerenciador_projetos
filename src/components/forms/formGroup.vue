<template>
    <div class="form-group">
      <input :name="name" :type="type" :placeholder="placeholder" :v-model="name" >
    </div>
</template>

<script setup>
  const props = defineProps({
    name: {
      type:String,
      required: true
    },
    type: {
      type:String,
      default:'text'
    },
    placeholder: {
      type: String,
    },
    value: {
      type: String
    }
  })
</script>

<style setup>
.form-group {
  @apply flex flex-col gap-2;
}

.form-group input {
  @apply py-1 px-2 border-2 border-gray-500 rounded bg-transparent;
  outline: none
}
</style>