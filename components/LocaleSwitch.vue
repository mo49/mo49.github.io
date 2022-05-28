<template>
  <ul>
    <li>
      <button :class="{ 'is-active': isActive('en') }" @click="changeLocale('en')">
        {{ $t('LOCALE_EN') }}
      </button>
    </li>
    <li>
      <button :class="{ 'is-active': isActive('ja') }" @click="changeLocale('ja')">
        {{ $t('LOCALE_JA') }}
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })

const isActive = (lang: string) => {
  return locale.value === lang
}

const changeLocale = (lang: string) => {
  locale.value = lang
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
}

li {
  list-style: none;
}

button {
  border: none;
  cursor: pointer;
  padding: 5px;
  margin-left: 5px;
  background-color: transparent;

  &.is-active {
    background-color: $main-color;
    color: #fff;
  }
}
</style>
