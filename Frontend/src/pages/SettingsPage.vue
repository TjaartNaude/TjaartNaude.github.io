<script>
import { ref } from "vue";
</script>

<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card class="my-card q-ma-lg">
        <q-card-section class="bg-secondary text-white">
          <div class="text-h6">Index</div>
        </q-card-section>
        <q-separator />

        <!-- 
            Options related to new requests section 
        -->
        <div class="text-h7">Manage</div>
        <q-separator inset="item" />
        <div class="row">
          <q-card
            class="settings-card text-black cursor-pointer relative-position bg-white shadow-5"
            @click="$router.push('/priorities')"
          >
            <q-card-section>
              <div class="text-subtitel1 text-weight-bold">
                Ticket Priorities
              </div>
              <div class="text-subheading text-center">
                View and Edit Ticket Priority Data
              </div>
            </q-card-section>
          </q-card>
          <q-card
            class="settings-card text-black cursor-pointer relative-position bg-white shadow-5"
            @click="$router.push('/ticketcategories')"
          >
            <q-card-section>
              <div class="text-subtitel1 text-weight-bold">
                Ticket Categories
              </div>
              <div class="text-subheading text-center">
                View and Edit Ticket Category Data
              </div>
            </q-card-section>
          </q-card>
          <q-card
            class="settings-card text-black cursor-pointer relative-position bg-white shadow-5"
            @click="$router.push('/ticketcategories')"
          >
            <q-card-section>
              <div class="text-subtitel1 text-weight-bold">
                Ticket Statusses
              </div>
              <div class="text-subheading text-center">
                View and Edit Ticket Status Data
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="text-h7">Users and Roles</div>

        <!--
            User management section
        -->
        <q-separator inset="item" />
        <div class="row">
          <q-card
            class="settings-card text-black cursor-pointer relative-position bg-white shadow-5"
            @click="$router.push('/users')"
          >
            <q-card-section>
              <div class="text-subtitel1 text-weight-bold">
                <q-icon color="secondary" name="fa-solid fa-table" /> Users
              </div>
              <div class="text-subheading text-center">
                View and Edit Users and Permissions
              </div>
            </q-card-section>
          </q-card>
          <q-card
            class="settings-card text-black cursor-pointer relative-position bg-white shadow-5"
            @click="$router.push('/ticketcategories')"
          >
            <q-card-section>
              <div class="text-subtitel1 text-weight-bold">User Roles</div>
              <div class="text-subheading text-center">
                View and Edit User Role Data
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-card>
    </div>
  </div>
</template>
<style scoped>
.text-h7 {
  margin: 15px;
  font-weight: bold;
  margin-top: 30px;
}

.q-separator--horizontal-item-inset {
  margin-left: 0;
  margin-right: 0;
}

.settings-card {
  margin: 20px;
  width: 20%;
  border-style: solid;
  border-color: #a62626;
  border-width: 1px;
}

.text-subheading {
  margin-top: 10px;
}

.q-icon {
  margin-right: 8px;
}
.text-subtitle1 {
  font-size: large;
}
</style>
