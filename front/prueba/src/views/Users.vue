<template>
  <div>
   

    <div class="mt-8"></div>

    <div class="flex flex-col mt-8">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nombre
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Apellido
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Direccion
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Compañia
                </th>
                 <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Opciones
                </th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(u, index) in users" :key="index">
                 <td
                  class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                >
                  <span
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                    >{{ u.Nombre }}</span
                  >
                </td>
                 <td
                  class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                >
                  <span
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                    >{{ u.Apellido }}</span
                  >
                </td>
                 <td
                  class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                >
                  <span
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                    >{{ u.Email }}</span
                  >
                </td>
                 <td
                  class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                >
                  <span
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                    >{{ u.Direccion }}</span
                  >
                </td>
                 <td
                  class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                >
                  <span
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                    >{{ u.Compania }}</span
                  >
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                >
                  <a href="/todos/" class="text-indigo-600 hover:text-indigo-900"
                    >Ver To-Dos</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface User {
  Nombre: string;
  Apellido: string;
  Email: string;
  Direccion: string;
  Compania: string;

}

export default defineComponent({
 
  setup() {
    let _Users = [];
    console.log("call api")
   fetch("http://localhost:3000",{
      "method":"GET",
      headers: {
      'content-type': 'application/json'
    }
    })
    .then(res => {
      
      if (!res.ok) {
        console.log("not OK")
      }
      else{
        res.json().then((json) => {
          _Users=json
          console.log(_Users)
        })
      }

      return res.json();
    })
  
    .catch(err => {
      err.value = err;
      // In case a custom JSON error response was provided
      if (err.json) {
        return err.json.then(json => {
          // set the JSON response message
          err.value.message = json.message;
        });
      }
    })
   const testUser: User = {
     Nombre: "string",
      Apellido: "string",
      Email: "string",
      Direccion: "string",
      Compania: "string",
    };

    const users = ref<User[]>([...Array(10).keys()].map(() => testUser));

    const users2 = ref<User[]>(_Users.map(() => testUser));

    return {
      users,
    };
  },
});
</script>
