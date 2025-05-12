"use client"

import { useState, useRef } from "react"
import Image from "next/image"

const games = [
  {
    name: "Squidki Game",
    icon: "/images/new_mods/Squidki Game.png",
    url: "https://wowtbc.net/sprunkin/sprunki-squid-game/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "crazycattle3d",
    icon: "/images/new_mods/crazy-cattle-3d-m160x96.jpg",
    url: "https://smash-karts.org/crazy-cattle-3d.embed",
    info: {
      developer: "crazycattle3d",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Super Friday Night Squid Challenge",
    icon: "/images/new_mods/Super Friday Night Squid Challenge.png",
    url: "https://sprunki-games.com/super-friday-night-squid-challenge.embed",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Squidki Retake",
    icon: "/images/new_mods/Squidki Retake.png",
    url: "https://wowtbc.net/sprunkin/retake/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Squidki Sinner",
    icon: "/images/new_mods/Squidki Sinner.png",
    url: "https://game.sprunkiincredibox.app/Sprunki%20Incredibox.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Sprunki Spruted Remastered",
    icon: "/images/new_mods/Sprunki Spruted Remastered.png",
    url: "https://wowtbc.net/sprunkin/spruted-remastered/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Sprunki Skibidi Toilet Remake 4.5",
    icon: "/images/new_mods/Sprunki Skibidi Toilet Remake 4.5.png",
    url: "https://wowtbc.net/sprunkin/skibidi-toilet4.5/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Sprunki Revamped 2.0",
    icon: "/images/new_mods/Sprunki Revamped 2.0.png",
    url: "https://wowtbc.net/sprunkin/revamped-2/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Corruptbox but Abgerny",
    icon: "/images/new_mods/Corruptbox but Abgerny.png",
    url: "https://wowtbc.net/sprunkin/corruptbox-abgerney/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Sprunki EmojiCat",
    icon: "/images/new_mods/Sprunki EmojiCat.png",
    url: "https://wowtbc.net/sprunkin/emojicat/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Sprunki Pyramixed but Agents",
    icon: "/images/new_mods/Sprunki Pyramixed but Agents.png",
    url: "https://wowtbc.net/sprunkin/pyramixed-agent/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Sprunki deluxe!!",
    icon: "/images/new_mods/Sprunki deluxe!!.png",
    url: "https://wowtbc.net/sprunkin/sprunked-deluxe/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Sprunki Fiddlebops 56",
    icon: "/images/new_mods/Sprunki Fiddlebops 56.png",
    url: "https://wowtbc.net/sprunkin/fiddlebops56/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Sprunki Definitive Phase 9 Fan-made",
    icon: "/images/new_mods/Sprunki Definitive Phase 9 Fan-made.png",
    url: "https://wowtbc.net/sprunkin/definitive-phase9-fanmade/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Sprunki ParaRoblox",
    icon: "/images/new_mods/Sprunki ParaRoblox.png",
    url: "https://wowtbc.net/sprunkin/pararoblox/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Sprunked Plus+",
    icon: "/images/new_mods/Sprunked Plus+.png",
    url: "https://wowtbc.net/sprunkin/sprunked-plus/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },



  {
    "name": "Squidki Remastered 3.0",
    "icon": "/images/new_mods/Sprunki Remastered 3.0.png",
    "url": "https://wowtbc.net/sprunkin/remastered3/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Sprunksters But Sprunki",
    "icon": "/images/new_mods/Sprunksters But Sprunki.png",
    "url": "https://wowtbc.net/sprunkin/sprunksters-but-sprunki/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Sprunki Chaotic Good Night Time",
    "icon": "/images/new_mods/Sprunki Chaotic Good Night Time.png",
    "url": "https://wowtbc.net/sprunkin/chaotic-good-night/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Cool As Ice with Abgerny",
    "icon": "/images/new_mods/Cool As Ice with Abgerny.png",
    "url": "https://wowtbc.net/sprunkin/coolasice-abgerney/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Sprunki Phase 7 Original",
    "icon": "/images/new_mods/Sprunki Phase 7 Original.png",
    "url": "https://wowtbc.net/sprunkin/phase7-original/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Parodybox Remake",
    "icon": "/images/new_mods/Parodybox Remake.png",
    "url": "https://wowtbc.net/sprunkin/parodybox-remake/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Sprunki but Back to School Thailand",
    "icon": "/images/new_mods/Sprunki but Back to School Thailand.png",
    "url": "https://wowtbc.net/sprunkin/thailand-school/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Sprunked Remake 3.0",
    "icon": "/images/new_mods/Sprunked Remake 3.0.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-remake3/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Sprunki Spruted Remastered",
    "icon": "/images/new_mods/Sprunki Spruted Remastered.png",
    "url": "https://wowtbc.net/sprunkin/spruted-remastered/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Sprunki Skibidi Toilet Remake 4.5",
    "icon": "/images/new_mods/Sprunki Skibidi Toilet Remake 4.5.png",
    "url": "https://wowtbc.net/sprunkin/skibidi-toilet4.5/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Sprunki Revamped 2.0",
    "icon": "/images/new_mods/Sprunki Revamped 2.0.png",
    "url": "https://wowtbc.net/sprunkin/revamped-2/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Squidki FNAF 4",
    "icon": "/images/new_mods/Sprunki FNAF 4.png",
    "url": "https://wowtbc.net/sprunkin/fnaf4/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Squidki X Orin Ayo",
    "icon": "/images/new_mods/Sprunki X Orin Ayo.png",
    "url": "https://wowtbc.net/sprunkin/orin-ayo/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Squidki Terror Forms",
    "icon": "/images/new_mods/Sprunki Terror Forms.png",
    "url": "https://wowtbc.net/sprunkin/terror-forms/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Sprunki Revamped 2.0",
    "icon": "/images/new_mods/Sprunki Revamped 2.0.png",
    "url": "https://wowtbc.net/sprunkin/revamped-2/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Sprunki Skibidi Toilet Remake 4.5",
    "icon": "/images/new_mods/Sprunki Skibidi Toilet Remake 4.5.png",
    "url": "https://wowtbc.net/sprunkin/skibidi-toilet4.5/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Sprunki Spruted Remastered",
    "icon": "/images/new_mods/Sprunki Spruted Remastered.png",
    "url": "https://wowtbc.net/sprunkin/spruted-remastered/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Squidki is a casual music game that lets you craft unique soundscapes. This modded version of Incredibox by NyankoBfLolCombine gives you DJ control to mix loops, vocals, beats, and melodies—pretty much create your own musical style. The game features vibrant characters and sounds for a completely immersive experience full of rhythmic possibilities. Whether you're a music enthusiast or just love experimenting, it's a fun and engaging way to express your creativity.",
      controls: "Use a mouse to play the game.",
    },
  },
]

interface GameIframeProps {
  currentGame: string
  onGameSelect: (game: string) => void
  isDarkMode: boolean
}

export default function GameIframe({ currentGame, onGameSelect, isDarkMode }: GameIframeProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isGameLoaded, setIsGameLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedGame = games.find((game) => game.name === currentGame) || games[0]

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (iframeRef.current?.requestFullscreen) {
        iframeRef.current.requestFullscreen()
        setIsFullscreen(true)
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  const handlePlayGame = () => {
    setIsGameLoaded(true)
  }

  return (
    <section className="py-6 px-[100px]">
      <div className="mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold tracking-wider mb-8 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Play {selectedGame.name}
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 relative">
            <button
              onClick={handleFullscreen}
              className="absolute top-4 right-4 z-10 bg-gray-800 bg-opacity-75 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9L4 4m0 0l5 5m-5-5v5m16-5l-5 5m5-5v5m0 11l-5-5m5 5h-5m-11 0l5-5m-5 5v-5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0 0l-5-5m-7 11h4m0 0v4m0-4l-5 5m11-5h-4m4 0v4m0-4l-5 5" />
                </svg>
              )}
            </button>

            <div ref={containerRef} className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
              {!isGameLoaded ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
                  <div className="absolute inset-0">
                    <Image
                      src={selectedGame.icon}
                      alt={selectedGame.name}
                      fill
                      className="object-cover blur-sm opacity-50"
                      sizes="(max-width: 768px) 100vw, 75vw"
                    />
                  </div>
                  <div className="relative w-[368px] h-[207px] z-10">
                    <Image
                      src={selectedGame.icon}
                      alt={selectedGame.name}
                      fill
                      className="object-contain rounded-lg shadow-2xl"
                      sizes="368px"
                    />
                  </div>
                  <button
                    onClick={handlePlayGame}
                    className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-200 shadow-lg flex items-center gap-2 z-20"
                  >
                    Play Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <iframe
                  ref={iframeRef}
                  src={selectedGame.url}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            {selectedGame.info && (
              <>
                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Game Information</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                      <p><strong>Developer:</strong> {selectedGame.info.developer}</p>
                      <p><strong>Rating:</strong> {selectedGame.info.rating} ({selectedGame.info.votes} votes)</p>
                      <p><strong>Released:</strong> {selectedGame.info.released}</p>
                      <p><strong>Last Updated:</strong> {selectedGame.info.lastUpdated}</p>
                  </div>
                  <div>
                      <p><strong>Technology:</strong> {selectedGame.info.technology}</p>
                      <p><strong>Platform:</strong> {selectedGame.info.platform}</p>
                      <p><strong>Controls:</strong> {selectedGame.info.controls}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <strong>Tags:</strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedGame.info.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <strong>Description:</strong>
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{selectedGame.info.description}</p>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Squidki Survival Tips</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="text-purple-500">✓</div>
                      <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Become adept at navigating the signature challenges of Squid Game, now infused with exciting musical elements. Understanding the unique mechanics of each challenge is crucial for survival, allowing you to leverage your musical skills to stay ahead of the competition.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-purple-500">✓</div>
                      <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Integrate Sprunki's innovative musical mechanics into your survival strategy. Crafting beats that resonate with the game's rhythm will enhance your ability to maneuver through obstacles and outsmart opponents, making every decision count in your quest for survival.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-purple-500">✓</div>
                      <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Stay alert to the Front Man's musical cues, as they provide vital information about upcoming challenges and threats. Recognizing these signals can give you a strategic advantage, helping you prepare for what lies ahead and ensuring you're always one step ahead of your rivals.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-purple-500">✓</div>
                      <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Utilize your musical creativity to compose strategic beats tailored for each elimination round. Your compositions should not only entertain but also serve as tactical tools that can influence the dynamics of the game, enhancing your chances of survival against formidable opponents.</p>
                    </div>

                </div>
              </div>
              </>
            )}
          </div>
          <div className="lg:w-1/4">

            <div className="grid grid-cols-3 gap-3">
              {games.map((game, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center cursor-pointer hover:scale-105 transition-transform`}
                  onClick={() => {
                    onGameSelect(game.name)
                    if (iframeRef.current) {
                      iframeRef.current.focus()
                      iframeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                  }}
                >
                  <div className="w-[135px] h-[87px] relative">
                  <Image
                      src={game.icon}
                    alt={game.name}
                      fill
                    className="rounded-lg object-cover"
                      sizes="135px"
                    />
                  </div>
                  <span
                    className={`mt-2 text-xs text-center ${isDarkMode ? 'text-white' : 'text-black'}`}
                    style={{ maxWidth: '135px' }}
                  >
                    {game.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

