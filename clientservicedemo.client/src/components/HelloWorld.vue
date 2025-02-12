<template>
  <div class="weather-component">
    <h1>Weather forecast</h1>
    <p>This component demonstrates fetching data from the server.</p>

    <div v-if="loading" class="loading">
      Loading... Please refresh once the ASP.NET backend has started. See
      <a href="https://aka.ms/jspsintegrationvue"
        >https://aka.ms/jspsintegrationvue</a
      >
      for more details.
    </div>

    <div v-if="post" class="content">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="forecast in post" :key="String(forecast.date)">
            <td>{{ forecast.date }}</td>
            <td>{{ forecast.temperatureC }}</td>
            <td>{{ forecast.temperatureF }}</td>
            <td>{{ forecast.summary }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-btn @click="fetchData">ProtoType1</v-btn>
    <v-btn @click="fetchData2">ProtoType2-QueryWeather</v-btn>
    <v-btn @click="fetchError">Prototype2-GetError</v-btn>
  </div>
</template>

<script setup lang="ts">
import WeatherForecast from "@/models/WeatherForecast";
import WeatherForecastService from "@/services/ProtoType1/weatherForecastService";
import altWeatherForecastService from "@/services/ProtoType2/altWeatherForecastService";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const loading = ref(false);
const post = ref<null | WeatherForecast[]>(null);
const singlePost = ref<null | WeatherForecast>(null);

async function fetchData() {
  post.value = null;
  loading.value = true;

  let response = await WeatherForecastService.query();
  if (response.status == 200) {
    post.value = response.data;
    loading.value = false;
  }
}

async function fetchData2() {
  post.value = null;
  loading.value = true;

  post.value = await altWeatherForecastService.query();
  loading.value = false;
}

async function fetchError() {
  singlePost.value = null;
  loading.value = true;

  singlePost.value = await altWeatherForecastService.get(3);
  loading.value = false;
}
</script>

<style scoped>
th {
  font-weight: bold;
}

th,
td {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.weather-component {
  text-align: center;
}

table {
  margin-left: auto;
  margin-right: auto;
}
</style>
