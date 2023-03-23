<script setup lang="ts">
import type { Car } from '@/interfaces/Car'
import { reactive } from 'vue'

const emit = defineEmits(['add-new-car'])
let formValues: Car = reactive({})

const resetFormValues = () => {
  formValues.model = undefined
  formValues.manufacturer = undefined
  formValues.year = undefined
  formValues.color = undefined
  formValues.fuelType = undefined
  formValues.price = undefined
}

const handleAddNewCar = () => {
  emit('add-new-car', { ...formValues })
  resetFormValues()
}
</script>

<template>
  <h2>Adicionar veículo</h2>
  <form @reset="resetFormValues" @submit.stop.prevent="handleAddNewCar">
    <fieldset>
      <legend>Preencha os campos abaixo para adicionar um veículo</legend>
      <label>
        Modelo
        <input v-model="formValues.model" type="text" placeholder="Focus" required />
      </label>
      <label>
        Marca
        <input v-model="formValues.manufacturer" type="text" placeholder="Ford" required />
      </label>
      <label>
        Ano
        <input v-model="formValues.year" type="number" placeholder="2023" required />
      </label>
      <label>
        Cor
        <input v-model="formValues.color" type="text" placeholder="Preto" required />
      </label>
      <label>
        Combustível
        <input v-model="formValues.fuelType" type="text" placeholder="Gasolina" required />
      </label>
      <label>
        Preço
        <input v-model="formValues.price" type="number" placeholder="85000" required />
      </label>

      <div>
        <button type="reset">Cancelar</button>
        <button type="submit">Adicionar</button>
      </div>
    </fieldset>
  </form>
</template>
