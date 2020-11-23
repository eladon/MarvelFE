<template>
  <div>
    <b-dropdown
      id="dropdown-1"
      :text="selectedActor"
      class="m-md-2 col-md-4"
    >
      <b-dropdown-item
        v-for="actor in actorsList"
        :key="actor"
        @click="getMovies(actor)"
        >{{ actor }}</b-dropdown-item
      >
    </b-dropdown>
    <div>
      <h6>
        <b-spinner small v-show="isLoading"></b-spinner>
        <div v-show="items.length > 0 && !isLoading">
          <span>
            {{ selectedActor }} Played in {{ items.length }} Marvel
            movies<br />
            as {{ characters }} for a total of
            {{ numberOfCharacters }} character<span
              v-show="numberOfCharacters > 1"
              >s</span
            ></span
          >
        </div>
      </h6>
      <b-table
        striped
        hover
        :items="items"
        g
        v-show="!isLoading"
      ></b-table>
    </div>
  </div>
</template>

<script>
import { actorService } from '../_services/actor.service';

export default {
  name: 'ActorsMovies',
  methods: {
    getMovies(actor) {
      this.isLoading = true;
      this.selectedActor = actor;
      actorService
        .getActorsData(actor)
        .then(data => {
          this.items = data[0];
          this.characters = data[1].characters.join();
          this.numberOfCharacters = data[1].numberOfCharacters;
        })
        .then(() => (this.isLoading = false));
    },
  },
  data() {
    return {
      isLoading: false,
      selectedActor: 'Select an actor',
      items: [],
      characters: [],
      numberOfCharacters: 0,
      actorsList: [
        'Robert Downey Jr.',
        'Chris Evans',
        'Mark Ruffalo',
        'Chris Hemsworth',
        'Scarlett Johansson',
        'Jeremy Renner',
        'Don Cheadle',
        'Paul Rudd',
        'Brie Larson',
        'Michael B. Jordan',
        'Karen Gillan',
        'Danai Gurira',
        'Josh Brolin',
        'Gwyneth Paltrow',
        'Bradley Cooper',
        'Tom Holland',
        'Zoe Saldana',
        'Anthony Mackie',
        'Tom Hiddleston',
        'Chris Pratt',
        'Chadwick Boseman',
        'Samuel L. Jackson',
        'Dave Bautista',
      ],
    };
  },
};
</script>

<style>
h6 {
  font-size: 2em;
  margin-top: 1%;
  margin-bottom: 2%;
}
</style>
