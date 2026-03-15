"use client"

export const FEATURES = [
  {
    slug: 'game-library',
    icon: '📋',
    name: 'Game Library',
    tagline: 'Your entire gaming history, perfectly organized.',
    color: '#FF3B7A',
    gradient: 'linear-gradient(135deg, #FF3B7A, #FF6B2B)',
    description: 'Track every game you\'ve ever played with Logary\'s powerful library system.',
    hero: 'Never lose track of a game again. Log everything — from retro classics to day-one releases — and keep your gaming life perfectly organized.',
    sections: [
      {
        title: 'Four shelf system',
        body: 'Organize every game into Played, Playing, Backlog, or Wishlist. Switch between statuses with a tap and watch your library grow over time.',
        items: ['Played — games you\'ve completed or experienced', 'Playing — your current active games', 'Backlog — games waiting for your attention', 'Wishlist — games on your radar to buy'],
      },
      {
        title: 'Rate & review',
        body: 'Give every game a score from 1 to 10 and add personal notes. Your reviews are private by default but can be shared with the community.',
        items: ['1–10 rating system', 'Personal notes and reviews', 'Start & finish date tracking', 'Platform tagging (PS5, PC, Switch…)'],
      },
      {
        title: 'Smart filtering',
        body: 'Instantly find any game in your library. Filter by genre, platform, year, rating or status and sort any way you want.',
        items: ['Filter by genre, platform, year', 'Sort by rating, date added, or title', 'Search across your entire collection', 'Bulk edit multiple games at once'],
      },
    ],
  },
  {
    slug: 'gaming-dna',
    icon: '🧬',
    name: 'Gaming DNA',
    tagline: 'Discover the gamer you actually are.',
    color: '#00D4FF',
    gradient: 'linear-gradient(135deg, #00D4FF, #A259FF)',
    description: 'Your Gaming DNA is a living fingerprint built from every game you log.',
    hero: 'You think you\'re an RPG fan, but are you really? Gaming DNA analyzes your full library and reveals your true genre identity — updated live every time you log a game.',
    sections: [
      {
        title: 'Genre breakdown',
        body: 'See exactly how your playtime is distributed across Action, RPG, Adventure, Platformer, Arcade, Strategy, and more. Every percentage is backed by real data from your library.',
        items: ['Real-time genre percentages', 'Covers 20+ genre categories', 'Updates with every game logged', 'Visual bar chart representation'],
      },
      {
        title: 'DNA evolution',
        body: 'Watch your Gaming DNA shift over time as your tastes evolve. See how you played in 2020 vs today and track your journey as a gamer.',
        items: ['Monthly DNA snapshots', 'Historical timeline view', 'Year-over-year comparison', 'Biggest shifts highlighted'],
      },
      {
        title: 'Compare with friends',
        body: 'See how your DNA overlaps with friends. Find your gaming soulmate or discover you\'re total opposites — both are fun.',
        items: ['Side-by-side DNA comparison', 'Compatibility score', 'Shared genre highlights', 'Recommendations based on overlap'],
      },
    ],
  },
  {
    slug: 'smart-recommendations',
    icon: '✨',
    name: 'Smart Picks',
    tagline: 'Your next favorite game, before you know it.',
    color: '#A259FF',
    gradient: 'linear-gradient(135deg, #A259FF, #FF3B7A)',
    description: 'AI-powered game recommendations built on your unique Gaming DNA.',
    hero: 'Stop scrolling through endless lists. Logary\'s recommendation engine knows your taste better than any algorithm — because it\'s built entirely from your own playtime.',
    sections: [
      {
        title: 'DNA-powered picks',
        body: 'Every recommendation is generated from your Gaming DNA. Love Action? Expect more of what you actually love, not what\'s just popular.',
        items: ['Recommendations driven by your DNA', 'Filters out games already in your library', 'Updates as your DNA changes', 'Confidence score per recommendation'],
      },
      {
        title: 'For You feed',
        body: 'A curated daily feed of game picks tailored to your profile. New recommendations every day based on trending releases and your taste.',
        items: ['Refreshes daily', 'Mix of new releases and hidden gems', 'Genre-filtered sections', 'One-tap to add to Wishlist'],
      },
      {
        title: 'Community-boosted',
        body: 'Games loved by people with a similar DNA to yours get surfaced more. Real social signal, not paid placement.',
        items: ['DNA similarity matching', 'Highly-rated by similar gamers', 'No paid promotions ever', 'Transparent ranking logic'],
      },
    ],
  },
  {
    slug: 'community',
    icon: '👥',
    name: 'Community',
    tagline: 'Find your people. Game together.',
    color: '#00E676',
    gradient: 'linear-gradient(135deg, #00E676, #00D4FF)',
    description: 'A social layer built for gamers who care about what they play.',
    hero: 'Logary isn\'t just a tracker — it\'s a community of people who take gaming seriously. Follow friends, discover new voices, and share the games that matter to you.',
    sections: [
      {
        title: 'Follow system',
        body: 'Follow friends or anyone with great taste. See their recent plays, ratings, and reviews in your Activity feed in real time.',
        items: ['Follow any public profile', 'Activity feed of people you follow', 'See what they\'re playing right now', 'Get notified on new reviews'],
      },
      {
        title: 'Public profiles',
        body: 'Your Logary profile is your gaming identity. Show off your library, DNA, and top-rated games to the world.',
        items: ['Custom profile with avatar', 'Public library & DNA display', 'Pinned favorite games', 'Total games played badge'],
      },
      {
        title: 'Lists & reviews',
        body: 'Create and share curated game lists with the community. GOTY picks, hidden gems, must-plays — share what you know.',
        items: ['Create shareable game lists', 'Community upvotes on lists', 'Review visibility on game pages', 'Comment on others\' reviews'],
      },
    ],
  },
  {
    slug: 'play-stats',
    icon: '📊',
    name: 'Play Stats',
    tagline: 'Your gaming history told through data.',
    color: '#FFD600',
    gradient: 'linear-gradient(135deg, #FFD600, #FF6B2B)',
    description: 'Beautiful, detailed statistics about every aspect of your gaming life.',
    hero: 'How many games did you finish last year? What\'s your average rating? Which month were you most active? Play Stats has every answer.',
    sections: [
      {
        title: 'Activity overview',
        body: 'See games logged per month, average session activity, and your most productive gaming periods — all in a clean dashboard.',
        items: ['Monthly games logged chart', 'Total games by year', 'Most active months', 'Current vs all-time pace'],
      },
      {
        title: 'Rating analytics',
        body: 'Track how your ratings distribute over time. Are you generous? Harsh? Your rating curve reveals it all.',
        items: ['Rating distribution histogram', 'Average score over time', 'Genre average comparison', 'Highest and lowest rated genres'],
      },
      {
        title: 'Completion rate',
        body: 'See what percentage of your backlog you actually finish. Track your completion trend and set personal goals.',
        items: ['Completion percentage', 'Backlog growth vs played', 'Average time to complete', 'Monthly completion goals'],
      },
    ],
  },
  {
    slug: 'trending',
    icon: '🔥',
    name: 'Trending',
    tagline: 'Stay ahead of every release that matters.',
    color: '#FF6B2B',
    gradient: 'linear-gradient(135deg, #FF6B2B, #FFD600)',
    description: 'A curated feed of what\'s hot in gaming, filtered by your taste.',
    hero: 'No more FOMO. No more noise. Logary\'s Trending feed surfaces what\'s actually worth your time based on community activity and your own DNA.',
    sections: [
      {
        title: 'Community trending',
        body: 'See which games are being added to the most libraries right now. Real community data, not marketing spend.',
        items: ['Real-time trending games', 'Trending in your genres', 'Rising vs established titles', 'Filter by platform'],
      },
      {
        title: 'Upcoming releases',
        body: 'A calendar of upcoming games filtered by genres you love. Never miss a release that fits your taste again.',
        items: ['Release calendar view', 'Filter by your DNA genres', 'Add to Wishlist from calendar', 'Pre-release community buzz'],
      },
      {
        title: 'New & notable',
        body: 'A curated weekly digest of notable new releases, surprise indie hits, and games with sudden community momentum.',
        items: ['Weekly curated digest', 'Indie spotlight section', 'Surprise hits algorithm', 'Editor picks'],
      },
    ],
  },
]
