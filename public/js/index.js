const MAX_TWEET_LENGTH = 140;

new Vue({
  el: '#twitterVue',
  data: {
   tweet: '',
   photos: []
  },
  computed: {
    tweetIsOutOfRange: function() {
      return MAX_TWEET_LENGTH == this.charactersRemaining
      || this.charactersRemaining < 0;
    },
    charactersRemaining: function() {
      return MAX_TWEET_LENGTH - this.tweet.length;
    },
    underTenMark: function() {
      return this.charactersRemaining <= 10
    },
    underTwentyMark: function() {
      return this.charactersRemaining > 10 && this.charactersRemaining <=20
    },
    photoHasBeenUploaded: function() {
      return this.photos.length > 0;
    }
  },
  methods: {
    triggerFileUpload: function() {
      this.$refs.photoUpload.click();
    },
    handlePhotoUpload: function(e) {
      var self = this;
      var files = e.target.files;

      for (let i = 0; i < files.length; i++) {
        let reader = new FileReader();

        reader.onload = function(e) {
          self.photos.push(e.target.result);
        }

        reader.readAsDataURL(files[i]);
      }
    },
    removePhoto: function(index) {
      this.photos.splice(index, 1);
    }
  }
});
