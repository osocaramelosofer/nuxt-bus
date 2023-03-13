<script setup>
import { getConductor } from "../../helpers/getConductor";
import {ref} from "vue"

const route = useRoute();
const { id: conductorId } = route.params;
const conductor = ref({})
try {
  conductor = await getConductor(conductorId).data;
  console.log(conductor);
} catch (err) {
  const messageError = err.message;

  console.log(messageError);
}

defineProps({
  title: {
    type: String,
    default: "Edit",
  },
});
</script>



<template>
  <div>
    <h2>{{ title }} Conductor</h2>
    <span>{{ conductor }}</span>
    <!-- <p>{{ $route.params.id }}</p> -->
    <form action="/signup" method="post">
      <p>
        <label>First name</label><br />
        <input type="text" name="first_name" />
      </p>
      <p>
        <label>Last name</label><br />
        <input type="text" name="last_name" />
      </p>

      <p>
        <button>Sign up</button>
        <button type="reset">Reset form</button>
      </p>
    </form>
  </div>
</template>



<style>
</style>