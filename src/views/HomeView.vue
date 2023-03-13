<script setup lang="ts">
import type { Ref } from 'vue'
import type { Car, CarGroupedByManufacturer } from '@/interfaces/Car'

import { ref, watchEffect } from 'vue'
import ManufacturerTable from '@/components/ManufacturerTable.vue'
import CarForm from '@/components/CarForm.vue'
import { groupBy } from '@/utils/utils'

const carsGroupedByManufacturer: Ref<CarGroupedByManufacturer> = ref({})

const fetchCarsData = async () => {
  try {
    const response = await fetch('./cars.json')
    const carsData = await response.json()
    carsGroupedByManufacturer.value = groupBy(carsData, 'manufacturer')
  } catch (error) {
    console.error(error)
  }
}

const handleAddNewCar = (newCar: Car) => {
  const manufacturer = newCar.manufacturer as string
  const existingManufacturer = carsGroupedByManufacturer.value[manufacturer]
  if (existingManufacturer) existingManufacturer.push(newCar)
  else carsGroupedByManufacturer.value[manufacturer] = [newCar]
}

watchEffect(fetchCarsData)
</script>

<template>
  <h1>CARS - WSWork - Vue</h1>
  <template v-for="(cars, manufacturer) in carsGroupedByManufacturer" :key="manufacturer">
    <ManufacturerTable :cars="cars" :manufacturer="manufacturer" />
  </template>
  <CarForm @add-new-car="handleAddNewCar" />
</template>
