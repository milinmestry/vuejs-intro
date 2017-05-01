const MAX_TWEET_LENGTH = 140;

new Vue({
  el: '#twitterVue',
  data: {
   tweet: ''
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
  }
});


worldspacebs.com
