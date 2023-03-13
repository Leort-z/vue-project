<script setup lang="ts">
defineProps(['manufacturer', 'cars'])
</script>

<template>
  <h3>{{ manufacturer }}</h3>
  <table>
    <thead>
      <tr>
        <th>Model</th>
        <th>Manufacturer</th>
        <th>Year</th>
        <th>Fuel Type</th>
        <th>Color</th>
        <th>Transmission</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="car of cars" :key="car.id">
        <td>{{ car.model }}</td>
        <td>{{ car.manufacturer }}</td>
        <td>{{ car.year }}</td>
        <td>{{ car.fuelType }}</td>
        <td>{{ car.color }}</td>
        <td>{{ car.transmission }}</td>
        <td>{{ car.price }}</td>
      </tr>
    </tbody>
  </table>
</template>
