"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"

const games = [
  {
    "name": "Squidki Spruted Remastered",
    "icon": "/images/new_mods/Sprunki Spruted Remastered.jpeg",
    "url": "https://wowtbc.net/sprunkin/spruted-remastered/index.html",
    "description": "Home Squidki Spruted Remastered Squidki Spruted Remastered 583 votes Squidki Spruted Remastered M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Skibidi Toilet Remake 4.5",
    "icon": "/images/new_mods/Sprunki Skibidi Toilet Remake 4.5.png",
    "url": "https://wowtbc.net/sprunkin/skibidi-toilet4.5/index.html",
    "description": "Home Squidki Skibidi Toilet Remake 4.5 Squidki Skibidi Toilet Remake 4.5 583 votes Squidki Skibid...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Revamped 2.0",
    "icon": "/images/new_mods/Sprunki Revamped 2.0.png",
    "url": "https://wowtbc.net/sprunkin/revamped-2/index.html",
    "description": "Home Squidki Revamped 2.0 Squidki Revamped 2.0 583 votes Squidki Revamped 2.0 Mod is a polished a...",
    "type": "New Mods"
  },
  {
    "name": "Corruptbox but Abgerny",
    "icon": "/images/new_mods/Corruptbox but Abgerny.png",
    "url": "https://wowtbc.net/sprunkin/corruptbox-abgerney/index.html",
    "description": "Home Corruptbox but Abgerny Corruptbox but Abgerny 583 votes Corruptbox but Abgerny Mod is a glit...",
    "type": "New Mods"
  },
  {
    "name": "Squidki EmojiCat",
    "icon": "/images/new_mods/Sprunki EmojiCat.png",
    "url": "https://wowtbc.net/sprunkin/emojicat/index.html",
    "description": "Home Squidki EmojiCat Squidki EmojiCat 583 votes Squidki EmojiCat Mod is a fun, expressive, and i...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed but Agents",
    "icon": "/images/new_mods/Sprunki Pyramixed but Agents.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed-agent/index.html",
    "description": "Home Squidki Pyramixed but Agents Squidki Pyramixed but Agents 583 votes Squidki Pyramixed But Ag...",
    "type": "New Mods"
  },
  {
    "name": "Squidki deluxe!!",
    "icon": "/images/new_mods/Sprunki deluxe!!.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-deluxe!/index.html",
    "description": "Home Squidki deluxe!! Squidki deluxe!! 583 votes Squidki Deluxe!! Mod is a premium, feature-packe...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Fiddlebops 56",
    "icon": "/images/new_mods/Sprunki Fiddlebops 56.png",
    "url": "https://wowtbc.net/sprunkin/fiddlebops56/index.html",
    "description": "Home Squidki Fiddlebops 56 Squidki Fiddlebops 56 583 votes Squidki Fiddlebops 56 Mod is a quirky,...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Definitive Phase 9 Fan-made",
    "icon": "/images/new_mods/Sprunki Definitive Phase 9 Fan-made.png",
    "url": "https://wowtbc.net/sprunkin/definitive-phase9-fanmade/index.html",
    "description": "Home Squidki Definitive Phase 9 Fan-made Squidki Definitive Phase 9 Fan-made 583 votes Squidki De...",
    "type": "New Mods"
  },
  {
    "name": "Squidki ParaRoblox",
    "icon": "/images/new_mods/Sprunki ParaRoblox.png",
    "url": "https://wowtbc.net/sprunkin/pararoblox/index.html",
    "description": "Home Squidki ParaRoblox Squidki ParaRoblox 583 votes Squidki Pararoblox Mod is a fusion of Sprunk...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Plus+",
    "icon": "/images/new_mods/Sprunked Plus+.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-plus/index.html",
    "description": "Home Sprunked Plus+ Sprunked Plus+ 583 votes Sprunked Plus+ Mod is a power-packed expansion of th...",
    "type": "New Mods"
  },
  {
    "name": "Sprunksters But Squidki",
    "icon": "/images/new_mods/Sprunksters But Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/sprunksters-but-Squidki/index.html",
    "description": "Home Sprunksters But Squidki Sprunksters But Squidki 583 votes With Sprunksters but Squidki Mod i...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Chaotic Good Night Time",
    "icon": "/images/new_mods/Sprunki Chaotic Good Night Time.png",
    "url": "https://wowtbc.net/sprunkin/chaotic-good-night/index.html",
    "description": "Home Squidki Chaotic Good Night Time Squidki Chaotic Good Night Time 583 votes Squidki Chaotic Go...",
    "type": "New Mods"
  },
  {
    "name": "Cool As Ice with Abgerny",
    "icon": "/images/new_mods/Cool As Ice with Abgerny.png",
    "url": "https://wowtbc.net/sprunkin/coolasice-abgerney/index.html",
    "description": "Home Cool As Ice with Abgerny Cool As Ice with Abgerny 583 votes Cool As Ice with Abgerny Mod is ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 7 Original",
    "icon": "/images/new_mods/Sprunki Phase 7 Original.png",
    "url": "https://wowtbc.net/sprunkin/phase7-original/index.html",
    "description": "Home Squidki Phase 7 Original Squidki Phase 7 Original 583 votes Squidki Phase 7 Original Mod is ...",
    "type": "New Mods"
  },
  {
    "name": "Parodybox Remake",
    "icon": "/images/new_mods/Parodybox Remake.png",
    "url": "https://wowtbc.net/sprunkin/parodybox-remake/index.html",
    "description": "Home Parodybox Remake Parodybox Remake 583 votes Parodybox Remake Mod is a revamped and enhanced ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki but Back to School Thailand",
    "icon": "/images/new_mods/Sprunki but Back to School Thailand.png",
    "url": "https://wowtbc.net/sprunkin/thailand-school/index.html",
    "description": "Home Squidki but Back to School Thailand Squidki but Back to School Thailand 583 votes Squidki Bu...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Remake 3.0",
    "icon": "/images/new_mods/Sprunked Remake 3.0.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-remake3/index.html",
    "description": "Home Sprunked Remake 3.0 Sprunked Remake 3.0 583 votes Sprunked Remake 3.0 Mod is a fully upgrade...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed but Jet & Emily joined",
    "icon": "/images/new_mods/Sprunki Pyramixed but Jet & Emily joined.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed-emily/index.html",
    "description": "Home Squidki Pyramixed but Jet & Emily joined Squidki Pyramixed but Jet & Emily joined 583 votes ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3.5v2",
    "icon": "/images/new_mods/Sprunki Phase 3.5v2.png",
    "url": "https://wowtbc.net/sprunkin/phase3.5v2/index.html",
    "description": "Home Squidki Phase 3.5v2 Squidki Phase 3.5v2 583 votes Squidki Phase 3.5v2 Mod is an enhanced, re...",
    "type": "New Mods"
  },
  {
    "name": "Goonzy but Squidki",
    "icon": "/images/new_mods/Goonzy but Sprunki.png",
    "url": "https://wowtbc.net/sprunkin/goonzy-Squidki/index.html",
    "description": "Home Goonzy but Squidki Goonzy but Squidki 583 votes Goonzy but Squidki Mod is a fusion of Goonzy...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pokemon But Pyramixed",
    "icon": "/images/new_mods/Sprunki Pokemon But Pyramixed.png",
    "url": "https://wowtbc.net/sprunkin/pokemon-pyramixed/index.html",
    "description": "Home Squidki Pokemon But Pyramixed Squidki Pokemon But Pyramixed 583 votes Code: 1025 Squidki Pok...",
    "type": "New Mods"
  },
  {
    "name": "Sprunksters But Sprinkle",
    "icon": "/images/new_mods/Sprunksters But Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/sprunksters-sprinkle/index.html",
    "description": "Home Sprunksters But Sprinkle Sprunksters But Sprinkle 583 votes Sprunksters but is Sprinkle Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Final",
    "icon": "/images/new_mods/Sprunki Final.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-final/index.html",
    "description": "Home Squidki Final Squidki Final 583 votes Squidki Final Mod is the ultimate, climactic conclusio...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Blinking",
    "icon": "/images/new_mods/Sprunki Blinking.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-blinking/index.html",
    "description": "Home Squidki Blinking Squidki Blinking 583 votes Squidki Blinking Mod is a hypnotic, glitchy, and...",
    "type": "New Mods"
  },
  {
    "name": "Sprunk War",
    "icon": "/images/new_mods/Sprunk War.png",
    "url": "https://wowtbc.net/sprunkin/sprunk-war/index.html",
    "description": "Home Sprunk War Sprunk War 583 votes Sprunk War Mod is an intense, battle-driven Squidki mod that...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunmbox",
    "icon": "/images/new_mods/Sprunki Sprunmbox.png",
    "url": "https://wowtbc.net/sprunkin/sprunmbox/index.html",
    "description": "Home Squidki Sprunmbox Squidki Sprunmbox 583 votes Squidki Sprunmbox Mod is a dynamic, energetic,...",
    "type": "New Mods"
  },
  {
    "name": "Sprinkle Parasite 2",
    "icon": "/images/new_mods/Sprinkle Parasite 2.png",
    "url": "https://wowtbc.net/sprunkin/sprinkle-parasite2/index.html",
    "description": "Home Sprinkle Parasite 2 Sprinkle Parasite 2 583 votes Sprinkle Parasite 2 Mod is a dark, eerie, ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 222",
    "icon": "/images/new_mods/Sprunki Phase 222.png",
    "url": "https://wowtbc.net/sprunkin/phase222/index.html",
    "description": "Home Squidki Phase 222 Squidki Phase 222 583 votes Squidki Phase 222 Mod is an ultra-expanded, fu...",
    "type": "New Mods"
  },
  {
    "name": "Corruptbox 1 But Squidki Remake",
    "icon": "/images/new_mods/Corruptbox 1 But Sprunki Remake.png",
    "url": "https://wowtbc.net/sprunkin/corruptbox1-Squidki/index.html",
    "description": "Home Corruptbox 1 But Squidki Remake Corruptbox 1 But Squidki Remake 583 votes Corruptbox 1 BUT S...",
    "type": "New Mods"
  },
  {
    "name": "Squidki vBAL But All Simon",
    "icon": "/images/new_mods/Sprunki vBAL But All Simon.png",
    "url": "https://wowtbc.net/sprunkin/vbal-allsimons/index.html",
    "description": "Home Squidki vBAL But All Simon Squidki vBAL But All Simon 583 votes Squidki vBAL But All Simon M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Cool As Ice But Pryamixed",
    "icon": "/images/new_mods/Sprunki Cool As Ice But Pryamixed.png",
    "url": "https://wowtbc.net/sprunkin/coolasice-pyramixed/index.html",
    "description": "Home Squidki Cool As Ice But Pryamixed Squidki Cool As Ice But Pryamixed 583 votes Cool As Ice bu...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Swap 3",
    "icon": "/images/new_mods/Sprunki Swap 3.png",
    "url": "https://wowtbc.net/sprunkin/swap3/index.html",
    "description": "Home Squidki Swap 3 Squidki Swap 3 583 votes Squidki Swap 3 Mod is the third evolution of the Swa...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Definitive Phase 7",
    "icon": "/images/new_mods/Sprunki Definitive Phase 7.png",
    "url": "https://wowtbc.net/sprunkin/definitive-phase7/index.html",
    "description": "Home Squidki Definitive Phase 7 Squidki Definitive Phase 7 583 votes Squidki Definitive Phase 7 G...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed 0.9 Update",
    "icon": "/images/new_mods/Sprunki Pyramixed 0.9 Update.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed0.9/index.html",
    "description": "Home Squidki Pyramixed 0.9 Update Squidki Pyramixed 0.9 Update 583 votes Squidki Pyramixed 0.9 Ga...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Simplified",
    "icon": "/images/new_mods/Sprunki Simplified.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-simplified/index.html",
    "description": "Home Squidki Simplified Squidki Simplified 583 votes Squidki Simplified Mod is a streamlined and ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Tonrini",
    "icon": "/images/new_mods/Sprunki Tonrini.png",
    "url": "https://wowtbc.net/sprunkin/tonrini/index.html",
    "description": "Home Squidki Tonrini Squidki Tonrini 583 votes Squidki Tonrini Mod is a melodic and rhythmically ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Crazyboxed",
    "icon": "/images/new_mods/Sprunked Crazyboxed.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-crazyboxed/index.html",
    "description": "Home Sprunked Crazyboxed Sprunked Crazyboxed 583 votes Sprunked CrazyBoxed Mod is a wild, unpredi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Good Night",
    "icon": "/images/new_mods/Sprunki Good Night.png",
    "url": "https://wowtbc.net/sprunkin/good-night/index.html",
    "description": "Home Squidki Good Night Squidki Good Night 583 votes Squidki Good Night Mod is a soothing, dreaml...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed Squid Game",
    "icon": "/images/new_mods/Sprunki Pyramixed Squid Game.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed-squid/index.html",
    "description": "Home Squidki Pyramixed Squid Game Squidki Pyramixed Squid Game 583 votes Squidki Pyramixed: Squid...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Chaotic Good Remade",
    "icon": "/images/new_mods/Sprunki Chaotic Good Remade.png",
    "url": "https://wowtbc.net/sprunkin/chaotic-good-remade/index.html",
    "description": "Home Squidki Chaotic Good Remade Squidki Chaotic Good Remade 583 votes Squidki Chaotic Good Remad...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Night Time 3.0",
    "icon": "/images/new_mods/Sprunki Night Time 3.0.png",
    "url": "https://wowtbc.net/sprunkin/night-time3/index.html",
    "description": "Home Squidki Night Time 3.0 Squidki Night Time 3.0 583 votes Squidki Night Time 3.0 Mod is a dark...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Scratch Remake",
    "icon": "/images/new_mods/Sprunki Scratch Remake.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-scratch-remake/index.html",
    "description": "Home Squidki Scratch Remake Squidki Scratch Remake 583 votes Squidki Scratch Remake Mod is a reva...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Upside Down",
    "icon": "/images/new_mods/Sprunked Upside Down.png",
    "url": "https://wowtbc.net/sprunkin/Sprunked-upside/index.html",
    "description": "Home Sprunked Upside Down Sprunked Upside Down 583 votes Sprunked Upside Down Mod is a mind-bendi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Parodybox Remade",
    "icon": "/images/new_mods/Sprunki Parodybox Remade.png",
    "url": "https://wowtbc.net/sprunkin/parodybox-remade/index.html",
    "description": "Home Squidki Parodybox Remade Squidki Parodybox Remade 583 votes Squidki Parodybox Remade Mod is ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Chaotic Good Cute",
    "icon": "/images/new_mods/Sprunki Chaotic Good Cute.png",
    "url": "https://wowtbc.net/sprunkin/chaotic-good-cute/index.html",
    "description": "Home Squidki Chaotic Good Cute Squidki Chaotic Good Cute 583 votes Squidki Chaotic Good Cute Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Fiddlebops Remake",
    "icon": "/images/new_mods/Sprunki Fiddlebops Remake.png",
    "url": "https://wowtbc.net/sprunkin/fiddlebops-improved/index.html",
    "description": "Home Squidki Fiddlebops Remake Squidki Fiddlebops Remake 583 votes Squidki Fiddlebops Remake Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Sprinker New Edition",
    "icon": "/images/new_mods/Sprinker New Edition.png",
    "url": "https://wowtbc.net/sprunkin/sprinker-new-edition/index.html",
    "description": "Home Sprinker New Edition Sprinker New Edition 583 votes Sprinker New Edition Mod is a revamped a...",
    "type": "New Mods"
  },
  {
    "name": "Squidki FallOut",
    "icon": "/images/new_mods/Sprunki FallOut.png",
    "url": "https://wowtbc.net/sprunkin/fallout/index.html",
    "description": "Home Squidki FallOut Squidki FallOut 583 votes Squidki Fallout Mod is a dark, apocalyptic-themed ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase ???",
    "icon": "/images/new_mods/Sprunki Phase ---.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase1234/index.html",
    "description": "Home Squidki Phase ??? Squidki Phase ??? 583 votes Squidki Phase ?? Mod is a mysterious and unpre...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 6 Definitive",
    "icon": "/images/new_mods/Sprunki Phase 6 Definitive.png",
    "url": "https://wowtbc.net/sprunkin/definitive-phase6/index.html",
    "description": "Home Squidki Phase 6 Definitive Squidki Phase 6 Definitive 583 votes Squidki Phase 6 Definitive M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki SprunkTopia",
    "icon": "/images/new_mods/Sprunki SprunkTopia.png",
    "url": "https://wowtbc.net/sprunkin/sprunktopia/index.html",
    "description": "Home Squidki SprunkTopia Squidki SprunkTopia 583 votes Squidki SprunkTopia Mod is a vibrant, utop...",
    "type": "New Mods"
  },
  {
    "name": "Squidki SPRUNNY!",
    "icon": "/images/new_mods/Sprunki SPRUNNY!.png",
    "url": "https://wowtbc.net/sprunkin/sprunny/index.html",
    "description": "Home Squidki SPRUNNY! Squidki SPRUNNY! 583 votes Squidki SPRUNNY! Mod is a hyperactive, cartoonis...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sinner Edition Modded",
    "icon": "/images/new_mods/Sprunki Sinner Edition Modded.png",
    "url": "https://wowtbc.net/sprunkin/retake-update/index.html",
    "description": "Home Squidki Sinner Edition Modded Squidki Sinner Edition Modded 583 votes Squidki Sinner Edition...",
    "type": "New Mods"
  },
  {
    "name": "The Second Squidki",
    "icon": "/images/new_mods/The Second Sprunki.png",
    "url": "https://wowtbc.net/sprunkin/second-Squidki/index.html",
    "description": "Home The Second Squidki The Second Squidki 583 votes The Second Squidki Mod is a bold and evoluti...",
    "type": "New Mods"
  },
  {
    "name": "Squidki frunki!",
    "icon": "/images/new_mods/Sprunki frunki!.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-frunki/index.html",
    "description": "Home Squidki frunki! Squidki frunki! 583 votes Squidki Frunki! Mod is a wild, wacky, and energeti...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Neo-Side",
    "icon": "/images/new_mods/Sprunki Neo-Side.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-neo-side/index.html",
    "description": "Home Squidki Neo-Side Squidki Neo-Side 583 votes Squidki Neo-Side Mod is a futuristic and cyberne...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spronkin' ",
    "icon": "/images/new_mods/Sprunki Spronkin'.png",
    "url": "https://wowtbc.net/sprunkin/spronkin/index.html",
    "description": "Home Squidki Spronkin'  Squidki Spronkin'  583 votes Squidki Spronkin Mod is a high-energy, industr...",
    "type": "New Mods"
  },
  {
    "name": "Sprinkler Scratch Edition",
    "icon": "/images/new_mods/Sprinkler Scratch Edition.png",
    "url": "https://wowtbc.net/sprunkin/sprinkler-scratch/index.html",
    "description": "Home Sprinkler Scratch Edition Sprinkler Scratch Edition 583 votes Sprinkler Scratch Edition Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 5 RM",
    "icon": "/images/new_mods/Sprunki Phase 5 RM.png",
    "url": "https://wowtbc.net/sprunkin/phase5-rm/index.html",
    "description": "Home Squidki Phase 5 RM Squidki Phase 5 RM 583 votes Squidki Phase 5 RM Mod is a remastered and e...",
    "type": "New Mods"
  },
  {
    "name": "Squidkilicious",
    "icon": "/images/new_mods/Squidkilicious.png",
    "url": "https://wowtbc.net/sprunkin/Squidkilicious/index.html",
    "description": "Home Squidkilicious Squidkilicious 583 votes Squidkilicious Mod is a vibrant and energetic Sprunk...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed: Toma to Retake",
    "icon": "/images/new_mods/Sprunki Pyramixed- Toma to Retake.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed-toma/index.html",
    "description": "Home Squidki Pyramixed: Toma to Retake Squidki Pyramixed: Toma to Retake 583 votes Squidki Pyrami...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 10 Original",
    "icon": "/images/new_mods/Sprunki Phase 10 Original.png",
    "url": "https://wowtbc.net/sprunkin/phase10-original/index.html",
    "description": "Home Squidki Phase 10 Original Squidki Phase 10 Original 583 votes Squidki Phase 10 Original Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Lands",
    "icon": "/images/new_mods/Sprunki Lands.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-lands/index.html",
    "description": "Home Squidki Lands Squidki Lands 583 votes Squidki Lands Mod is a vibrant and adventurous Squidki...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 4 RM",
    "icon": "/images/new_mods/Sprunki Phase 4 RM.png",
    "url": "https://wowtbc.net/sprunkin/phase4-rm/index.html",
    "description": "Home Squidki Phase 4 RM Squidki Phase 4 RM 583 votes Squidki Phase 4 RM Mod is an intense and evo...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Monomix",
    "icon": "/images/new_mods/Sprunki Monomix.png",
    "url": "https://wowtbc.net/sprunkin/monomix/index.html",
    "description": "Home Squidki Monomix Squidki Monomix 583 votes Squidki Monomix Mod is a minimalist yet powerful S...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Compas",
    "icon": "/images/new_mods/Sprunki Compas.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-compas/index.html",
    "description": "Home Squidki Compas Squidki Compas 583 votes Squidki Compas Mod is a rhythmically rich Squidki mo...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprudzi",
    "icon": "/images/new_mods/Sprunki Sprudzi.png",
    "url": "https://wowtbc.net/sprunkin/sprudzi/index.html",
    "description": "Home Squidki Sprudzi Squidki Sprudzi 583 votes Squidki Sprudzi Mod is a dynamic and energetic Spr...",
    "type": "New Mods"
  },
  {
    "name": "Sprunky Tree Friends Re-Natured",
    "icon": "/images/new_mods/Sprunky Tree Friends Re-Natured.png",
    "url": "https://wowtbc.net/sprunkin/sprunky-tree-friends/index.html",
    "description": "Home Sprunky Tree Friends Re-Natured Sprunky Tree Friends Re-Natured 583 votes Sprunky Tree Frien...",
    "type": "New Mods"
  },
  {
    "name": "Sprunci Phase 2",
    "icon": "/images/new_mods/Sprunci Phase 2.png",
    "url": "https://wowtbc.net/sprunkin/sprunci-phase2/index.html",
    "description": "Home Sprunci Phase 2 Sprunci Phase 2 583 votes Sprunci Phase 2 Mod is the electrifying sequel in ...",
    "type": "New Mods"
  },
  {
    "name": "NumberSquidki Retake",
    "icon": "/images/new_mods/NumberSquidki Retake.png",
    "url": "https://wowtbc.net/sprunkin/numberSquidki/index.html",
    "description": "Home NumberSquidki Retake NumberSquidki Retake 583 votes NumberSquidki Retake Mod is a thrilling ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunkonitkers",
    "icon": "/images/new_mods/Sprunki Sprunkonitkers.png",
    "url": "https://wowtbc.net/sprunkin/sprunkonitkers/index.html",
    "description": "Home Squidki Sprunkonitkers Squidki Sprunkonitkers 583 votes Squidki Sprunkonitkers Mod is an exc...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunci Pyramix Look",
    "icon": "/images/new_mods/Sprunki Sprunci Pyramix Look.png",
    "url": "https://wowtbc.net/sprunkin/sprunci-pyramix-look/index.html",
    "description": "Home Squidki Sprunci Pyramix Look Squidki Sprunci Pyramix Look 583 votes Squidki Sprunci Pyramix ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Dandy's Twotake",
    "icon": "/images/new_mods/Sprunki Dandy's Twotake.png",
    "url": "https://wowtbc.net/sprunkin/dandy-twotake/index.html",
    "description": "Home Squidki Dandy's Twotake Squidki Dandy's Twotake 583 votes Squidki Dandy's Twotake is a uniqu...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed: Animated Happy Mod",
    "icon": "/images/new_mods/Sprunki Pyramixed- Animated Happy Mod.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed-animated/index.html",
    "description": "Home Squidki Pyramixed: Animated Happy Mod Squidki Pyramixed: Animated Happy Mod 583 votes Sprunk...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Star & Heart",
    "icon": "/images/new_mods/Squidki- Star & Heart.png",
    "url": "https://wowtbc.net/sprunkin/star-heart/index.html",
    "description": "Home Squidki: Star & Heart Squidki: Star & Heart 583 votes Squidki Star and Heart Mod is a bright...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Swap Repost",
    "icon": "/images/new_mods/Sprunki Swap Repost.png",
    "url": "https://wowtbc.net/sprunkin/swap-repost/index.html",
    "description": "Home Squidki Swap Repost Squidki Swap Repost 583 votes Squidki Swap Repost Mod is a unique remix ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Modded 4.0",
    "icon": "/images/new_mods/Sprunki Modded 4.0.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-modded4/index.html",
    "description": "Home Squidki Modded 4.0 Squidki Modded 4.0 583 votes Squidki Modded 4.0 Mod is the latest evoluti...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Chaotic Good Parasite",
    "icon": "/images/new_mods/Sprunki Chaotic Good Parasite.png",
    "url": "https://wowtbc.net/sprunkin/chaotic-good-parasite/index.html",
    "description": "Home Squidki Chaotic Good Parasite Squidki Chaotic Good Parasite 583 votes Squidki Chaotic Good P...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Jamming Mini Mod",
    "icon": "/images/new_mods/Sprunki Jamming Mini Mod.png",
    "url": "https://wowtbc.net/sprunkin/jamming/index.html",
    "description": "Home Squidki Jamming Mini Mod Squidki Jamming Mini Mod 583 votes Squidki Jamming Mini Mod is a co...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spruted Remastered",
    "icon": "/images/new_mods/Sprunki Spruted Remastered.png",
    "url": "https://wowtbc.net/sprunkin/spruted-remastered/index.html",
    "description": "Home Squidki Spruted Remastered Squidki Spruted Remastered 583 votes Squidki Spruted Remastered M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Skibidi Toilet Remake 4.5",
    "icon": "/images/new_mods/Sprunki Skibidi Toilet Remake 4.5.png",
    "url": "https://wowtbc.net/sprunkin/skibidi-toilet4.5/index.html",
    "description": "Home Squidki Skibidi Toilet Remake 4.5 Squidki Skibidi Toilet Remake 4.5 583 votes Squidki Skibid...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Revamped 2.0",
    "icon": "/images/new_mods/Sprunki Revamped 2.0.png",
    "url": "https://wowtbc.net/sprunkin/revamped-2/index.html",
    "description": "Home Squidki Revamped 2.0 Squidki Revamped 2.0 583 votes Squidki Revamped 2.0 Mod is a polished a...",
    "type": "New Mods"
  },
  {
    "name": "Corruptbox but Abgerny",
    "icon": "/images/new_mods/Corruptbox but Abgerny.png",
    "url": "https://wowtbc.net/sprunkin/corruptbox-abgerney/index.html",
    "description": "Home Corruptbox but Abgerny Corruptbox but Abgerny 583 votes Corruptbox but Abgerny Mod is a glit...",
    "type": "New Mods"
  },
  {
    "name": "Squidki EmojiCat",
    "icon": "/images/new_mods/Sprunki EmojiCat.png",
    "url": "https://wowtbc.net/sprunkin/emojicat/index.html",
    "description": "Home Squidki EmojiCat Squidki EmojiCat 583 votes Squidki EmojiCat Mod is a fun, expressive, and i...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed but Agents",
    "icon": "/images/new_mods/Sprunki Pyramixed but Agents.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed-agent/index.html",
    "description": "Home Squidki Pyramixed but Agents Squidki Pyramixed but Agents 583 votes Squidki Pyramixed But Ag...",
    "type": "New Mods"
  },
  {
    "name": "Squidki deluxe!!",
    "icon": "/images/new_mods/Sprunki deluxe!!.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-deluxe!/index.html",
    "description": "Home Squidki deluxe!! Squidki deluxe!! 583 votes Squidki Deluxe!! Mod is a premium, feature-packe...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Fiddlebops 56",
    "icon": "/images/new_mods/Sprunki Fiddlebops 56.png",
    "url": "https://wowtbc.net/sprunkin/fiddlebops56/index.html",
    "description": "Home Squidki Fiddlebops 56 Squidki Fiddlebops 56 583 votes Squidki Fiddlebops 56 Mod is a quirky,...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Definitive Phase 9 Fan-made",
    "icon": "/images/new_mods/Sprunki Definitive Phase 9 Fan-made.png",
    "url": "https://wowtbc.net/sprunkin/definitive-phase9-fanmade/index.html",
    "description": "Home Squidki Definitive Phase 9 Fan-made Squidki Definitive Phase 9 Fan-made 583 votes Squidki De...",
    "type": "New Mods"
  },
  {
    "name": "Squidki ParaRoblox",
    "icon": "/images/new_mods/Sprunki ParaRoblox.png",
    "url": "https://wowtbc.net/sprunkin/pararoblox/index.html",
    "description": "Home Squidki ParaRoblox Squidki ParaRoblox 583 votes Squidki Pararoblox Mod is a fusion of Sprunk...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Plus+",
    "icon": "/images/new_mods/Sprunked Plus+.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-plus/index.html",
    "description": "Home Sprunked Plus+ Sprunked Plus+ 583 votes Sprunked Plus+ Mod is a power-packed expansion of th...",
    "type": "New Mods"
  },
  {
    "name": "Sprunksters But Squidki",
    "icon": "/images/new_mods/Sprunksters But Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/sprunksters-but-Squidki/index.html",
    "description": "Home Sprunksters But Squidki Sprunksters But Squidki 583 votes With Sprunksters but Squidki Mod i...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Chaotic Good Night Time",
    "icon": "/images/new_mods/Sprunki Chaotic Good Night Time.png",
    "url": "https://wowtbc.net/sprunkin/chaotic-good-night/index.html",
    "description": "Home Squidki Chaotic Good Night Time Squidki Chaotic Good Night Time 583 votes Squidki Chaotic Go...",
    "type": "New Mods"
  },
  {
    "name": "Cool As Ice with Abgerny",
    "icon": "/images/new_mods/Cool As Ice with Abgerny.png",
    "url": "https://wowtbc.net/sprunkin/coolasice-abgerney/index.html",
    "description": "Home Cool As Ice with Abgerny Cool As Ice with Abgerny 583 votes Cool As Ice with Abgerny Mod is ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 7 Original",
    "icon": "/images/new_mods/Sprunki Phase 7 Original.png",
    "url": "https://wowtbc.net/sprunkin/phase7-original/index.html",
    "description": "Home Squidki Phase 7 Original Squidki Phase 7 Original 583 votes Squidki Phase 7 Original Mod is ...",
    "type": "New Mods"
  },
  {
    "name": "Parodybox Remake",
    "icon": "/images/new_mods/Parodybox Remake.png",
    "url": "https://wowtbc.net/sprunkin/parodybox-remake/index.html",
    "description": "Home Parodybox Remake Parodybox Remake 583 votes Parodybox Remake Mod is a revamped and enhanced ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki but Back to School Thailand",
    "icon": "/images/new_mods/Sprunki but Back to School Thailand.png",
    "url": "https://wowtbc.net/sprunkin/thailand-school/index.html",
    "description": "Home Squidki but Back to School Thailand Squidki but Back to School Thailand 583 votes Squidki Bu...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Remake 3.0",
    "icon": "/images/new_mods/Sprunked Remake 3.0.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-remake3/index.html",
    "description": "Home Sprunked Remake 3.0 Sprunked Remake 3.0 583 votes Sprunked Remake 3.0 Mod is a fully upgrade...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed but Jet & Emily joined",
    "icon": "/images/new_mods/Sprunki Pyramixed but Jet & Emily joined.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed-emily/index.html",
    "description": "Home Squidki Pyramixed but Jet & Emily joined Squidki Pyramixed but Jet & Emily joined 583 votes ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3.5v2",
    "icon": "/images/new_mods/Sprunki Phase 3.5v2.png",
    "url": "https://wowtbc.net/sprunkin/phase3.5v2/index.html",
    "description": "Home Squidki Phase 3.5v2 Squidki Phase 3.5v2 583 votes Squidki Phase 3.5v2 Mod is an enhanced, re...",
    "type": "New Mods"
  },
  {
    "name": "Goonzy but Squidki",
    "icon": "/images/new_mods/Goonzy but Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/goonzy-Squidki/index.html",
    "description": "Home Goonzy but Squidki Goonzy but Squidki 583 votes Goonzy but Squidki Mod is a fusion of Goonzy...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pokemon But Pyramixed",
    "icon": "/images/new_mods/Sprunki Pokemon But Pyramixed.png",
    "url": "https://wowtbc.net/sprunkin/pokemon-pyramixed/index.html",
    "description": "Home Squidki Pokemon But Pyramixed Squidki Pokemon But Pyramixed 583 votes Code: 1025 Squidki Pok...",
    "type": "New Mods"
  },
  {
    "name": "Sprunksters But Sprinkle",
    "icon": "/images/new_mods/Sprunksters But Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/sprunksters-sprinkle/index.html",
    "description": "Home Sprunksters But Sprinkle Sprunksters But Sprinkle 583 votes Sprunksters but is Sprinkle Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Final",
    "icon": "/images/new_mods/Sprunki Final.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-final/index.html",
    "description": "Home Squidki Final Squidki Final 583 votes Squidki Final Mod is the ultimate, climactic conclusio...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Blinking",
    "icon": "/images/new_mods/Sprunki Blinking.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-blinking/index.html",
    "description": "Home Squidki Blinking Squidki Blinking 583 votes Squidki Blinking Mod is a hypnotic, glitchy, and...",
    "type": "New Mods"
  },
  {
    "name": "Sprunk War",
    "icon": "/images/new_mods/Sprunk War.png",
    "url": "https://wowtbc.net/sprunkin/sprunk-war/index.html",
    "description": "Home Sprunk War Sprunk War 583 votes Sprunk War Mod is an intense, battle-driven Squidki mod that...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunmbox",
    "icon": "/images/new_mods/Sprunki Sprunmbox.png",
    "url": "https://wowtbc.net/sprunkin/sprunmbox/index.html",
    "description": "Home Squidki Sprunmbox Squidki Sprunmbox 583 votes Squidki Sprunmbox Mod is a dynamic, energetic,...",
    "type": "New Mods"
  },
  {
    "name": "Sprinkle Parasite 2",
    "icon": "/images/new_mods/Sprinkle Parasite 2.png",
    "url": "https://wowtbc.net/sprunkin/sprinkle-parasite2/index.html",
    "description": "Home Sprinkle Parasite 2 Sprinkle Parasite 2 583 votes Sprinkle Parasite 2 Mod is a dark, eerie, ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 222",
    "icon": "/images/new_mods/Sprunki Phase 222.png",
    "url": "https://wowtbc.net/sprunkin/phase222/index.html",
    "description": "Home Squidki Phase 222 Squidki Phase 222 583 votes Squidki Phase 222 Mod is an ultra-expanded, fu...",
    "type": "New Mods"
  },
  {
    "name": "Corruptbox 1 But Squidki Remake",
    "icon": "/images/new_mods/Corruptbox 1 But Sprunki Remake.png",
    "url": "https://wowtbc.net/sprunkin/corruptbox1-Squidki/index.html",
    "description": "Home Corruptbox 1 But Squidki Remake Corruptbox 1 But Squidki Remake 583 votes Corruptbox 1 BUT S...",
    "type": "New Mods"
  },
  {
    "name": "Squidki vBAL But All Simon",
    "icon": "/images/new_mods/Sprunki vBAL But All Simon.png",
    "url": "https://wowtbc.net/sprunkin/vbal-allsimons/index.html",
    "description": "Home Squidki vBAL But All Simon Squidki vBAL But All Simon 583 votes Squidki vBAL But All Simon M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Cool As Ice But Pryamixed",
    "icon": "/images/new_mods/Sprunki Cool As Ice But Pryamixed.png",
    "url": "https://wowtbc.net/sprunkin/coolasice-pyramixed/index.html",
    "description": "Home Squidki Cool As Ice But Pryamixed Squidki Cool As Ice But Pryamixed 583 votes Cool As Ice bu...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Swap 3",
    "icon": "/images/new_mods/Sprunki Swap 3.png",
    "url": "https://wowtbc.net/sprunkin/swap3/index.html",
    "description": "Home Squidki Swap 3 Squidki Swap 3 583 votes Squidki Swap 3 Mod is the third evolution of the Swa...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Definitive Phase 7",
    "icon": "/images/new_mods/Sprunki Definitive Phase 7.png",
    "url": "https://wowtbc.net/sprunkin/definitive-phase7/index.html",
    "description": "Home Squidki Definitive Phase 7 Squidki Definitive Phase 7 583 votes Squidki Definitive Phase 7 G...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed 0.9 Update",
    "icon": "/images/new_mods/Sprunki Pyramixed 0.9 Update.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed0.9/index.html",
    "description": "Home Squidki Pyramixed 0.9 Update Squidki Pyramixed 0.9 Update 583 votes Squidki Pyramixed 0.9 Ga...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Simplified",
    "icon": "/images/new_mods/Sprunki Simplified.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-simplified/index.html",
    "description": "Home Squidki Simplified Squidki Simplified 583 votes Squidki Simplified Mod is a streamlined and ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Tonrini",
    "icon": "/images/new_mods/Sprunki Tonrini.png",
    "url": "https://wowtbc.net/sprunkin/tonrini/index.html",
    "description": "Home Squidki Tonrini Squidki Tonrini 583 votes Squidki Tonrini Mod is a melodic and rhythmically ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Crazyboxed",
    "icon": "/images/new_mods/Sprunked Crazyboxed.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-crazyboxed/index.html",
    "description": "Home Sprunked Crazyboxed Sprunked Crazyboxed 583 votes Sprunked CrazyBoxed Mod is a wild, unpredi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Good Night",
    "icon": "/images/new_mods/Sprunki Good Night.png",
    "url": "https://wowtbc.net/sprunkin/good-night/index.html",
    "description": "Home Squidki Good Night Squidki Good Night 583 votes Squidki Good Night Mod is a soothing, dreaml...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed Squid Game",
    "icon": "/images/new_mods/Sprunki Pyramixed Squid Game.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed-squid/index.html",
    "description": "Home Squidki Pyramixed Squid Game Squidki Pyramixed Squid Game 583 votes Squidki Pyramixed: Squid...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Chaotic Good Remade",
    "icon": "/images/new_mods/Sprunki Chaotic Good Remade.png",
    "url": "https://wowtbc.net/sprunkin/chaotic-good-remade/index.html",
    "description": "Home Squidki Chaotic Good Remade Squidki Chaotic Good Remade 583 votes Squidki Chaotic Good Remad...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Night Time 3.0",
    "icon": "/images/new_mods/Sprunki Night Time 3.0.png",
    "url": "https://wowtbc.net/sprunkin/night-time3/index.html",
    "description": "Home Squidki Night Time 3.0 Squidki Night Time 3.0 583 votes Squidki Night Time 3.0 Mod is a dark...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Scratch Remake",
    "icon": "/images/new_mods/Sprunki Scratch Remake.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-scratch-remake/index.html",
    "description": "Home Squidki Scratch Remake Squidki Scratch Remake 583 votes Squidki Scratch Remake Mod is a reva...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Upside Down",
    "icon": "/images/new_mods/Sprunked Upside Down.png",
    "url": "https://wowtbc.net/sprunkin/Sprunked-upside/index.html",
    "description": "Home Sprunked Upside Down Sprunked Upside Down 583 votes Sprunked Upside Down Mod is a mind-bendi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Parodybox Remade",
    "icon": "/images/new_mods/Sprunki Parodybox Remade.png",
    "url": "https://wowtbc.net/sprunkin/parodybox-remade/index.html",
    "description": "Home Squidki Parodybox Remade Squidki Parodybox Remade 583 votes Squidki Parodybox Remade Mod is ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Chaotic Good Cute",
    "icon": "/images/new_mods/Sprunki Chaotic Good Cute.png",
    "url": "https://wowtbc.net/sprunkin/chaotic-good-cute/index.html",
    "description": "Home Squidki Chaotic Good Cute Squidki Chaotic Good Cute 583 votes Squidki Chaotic Good Cute Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Fiddlebops Remake",
    "icon": "/images/new_mods/Sprunki Fiddlebops Remake.png",
    "url": "https://wowtbc.net/sprunkin/fiddlebops-improved/index.html",
    "description": "Home Squidki Fiddlebops Remake Squidki Fiddlebops Remake 583 votes Squidki Fiddlebops Remake Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Sprinker New Edition",
    "icon": "/images/new_mods/Sprinker New Edition.png",
    "url": "https://wowtbc.net/sprunkin/sprinker-new-edition/index.html",
    "description": "Home Sprinker New Edition Sprinker New Edition 583 votes Sprinker New Edition Mod is a revamped a...",
    "type": "New Mods"
  },
  {
    "name": "Squidki FallOut",
    "icon": "/images/new_mods/Sprunki FallOut.png",
    "url": "https://wowtbc.net/sprunkin/fallout/index.html",
    "description": "Home Squidki FallOut Squidki FallOut 583 votes Squidki Fallout Mod is a dark, apocalyptic-themed ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase ???",
    "icon": "/images/new_mods/Sprunki Phase ---.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase1234/index.html",
    "description": "Home Squidki Phase ??? Squidki Phase ??? 583 votes Squidki Phase ?? Mod is a mysterious and unpre...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 6 Definitive",
    "icon": "/images/new_mods/Sprunki Phase 6 Definitive.png",
    "url": "https://wowtbc.net/sprunkin/definitive-phase6/index.html",
    "description": "Home Squidki Phase 6 Definitive Squidki Phase 6 Definitive 583 votes Squidki Phase 6 Definitive M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki SprunkTopia",
    "icon": "/images/new_mods/Sprunki SprunkTopia.png",
    "url": "https://wowtbc.net/sprunkin/sprunktopia/index.html",
    "description": "Home Squidki SprunkTopia Squidki SprunkTopia 583 votes Squidki SprunkTopia Mod is a vibrant, utop...",
    "type": "New Mods"
  },
  {
    "name": "Squidki SPRUNNY!",
    "icon": "/images/new_mods/Sprunki SPRUNNY!.png",
    "url": "https://wowtbc.net/sprunkin/sprunny/index.html",
    "description": "Home Squidki SPRUNNY! Squidki SPRUNNY! 583 votes Squidki SPRUNNY! Mod is a hyperactive, cartoonis...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sinner Edition Modded",
    "icon": "/images/new_mods/Sprunki Sinner Edition Modded.png",
    "url": "https://wowtbc.net/sprunkin/retake-update/index.html",
    "description": "Home Squidki Sinner Edition Modded Squidki Sinner Edition Modded 583 votes Squidki Sinner Edition...",
    "type": "New Mods"
  },
  {
    "name": "The Second Squidki",
    "icon": "/images/new_mods/The Second Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/second-Squidki/index.html",
    "description": "Home The Second Squidki The Second Squidki 583 votes The Second Squidki Mod is a bold and evoluti...",
    "type": "New Mods"
  },
  {
    "name": "Squidki frunki!",
    "icon": "/images/new_mods/Sprunki frunki!.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-frunki/index.html",
    "description": "Home Squidki frunki! Squidki frunki! 583 votes Squidki Frunki! Mod is a wild, wacky, and energeti...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Neo-Side",
    "icon": "/images/new_mods/Sprunki Neo-Side.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-neo-side/index.html",
    "description": "Home Squidki Neo-Side Squidki Neo-Side 583 votes Squidki Neo-Side Mod is a futuristic and cyberne...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spronkin' ",
    "icon": "/images/new_mods/Sprunki Spronkin'.png",
    "url": "https://wowtbc.net/sprunkin/spronkin/index.html",
    "description": "Home Squidki Spronkin'  Squidki Spronkin'  583 votes Squidki Spronkin Mod is a high-energy, industr...",
    "type": "New Mods"
  },
  {
    "name": "Sprinkler Scratch Edition",
    "icon": "/images/new_mods/Sprinkler Scratch Edition.png",
    "url": "https://wowtbc.net/sprunkin/sprinkler-scratch/index.html",
    "description": "Home Sprinkler Scratch Edition Sprinkler Scratch Edition 583 votes Sprinkler Scratch Edition Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 5 RM",
    "icon": "/images/new_mods/Sprunki Phase 5 RM.png",
    "url": "https://wowtbc.net/sprunkin/phase5-rm/index.html",
    "description": "Home Squidki Phase 5 RM Squidki Phase 5 RM 583 votes Squidki Phase 5 RM Mod is a remastered and e...",
    "type": "New Mods"
  },
  {
    "name": "Squidkilicious",
    "icon": "/images/new_mods/Squidkilicious.png",
    "url": "https://wowtbc.net/sprunkin/Squidkilicious/index.html",
    "description": "Home Squidkilicious Squidkilicious 583 votes Squidkilicious Mod is a vibrant and energetic Sprunk...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed: Toma to Retake",
    "icon": "/images/new_mods/Sprunki Pyramixed- Toma to Retake.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed-toma/index.html",
    "description": "Home Squidki Pyramixed: Toma to Retake Squidki Pyramixed: Toma to Retake 583 votes Squidki Pyrami...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 10 Original",
    "icon": "/images/new_mods/Sprunki Phase 10 Original.png",
    "url": "https://wowtbc.net/sprunkin/phase10-original/index.html",
    "description": "Home Squidki Phase 10 Original Squidki Phase 10 Original 583 votes Squidki Phase 10 Original Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Lands",
    "icon": "/images/new_mods/Sprunki Lands.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-lands/index.html",
    "description": "Home Squidki Lands Squidki Lands 583 votes Squidki Lands Mod is a vibrant and adventurous Squidki...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 4 RM",
    "icon": "/images/new_mods/Sprunki Phase 4 RM.png",
    "url": "https://wowtbc.net/sprunkin/phase4-rm/index.html",
    "description": "Home Squidki Phase 4 RM Squidki Phase 4 RM 583 votes Squidki Phase 4 RM Mod is an intense and evo...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Monomix",
    "icon": "/images/new_mods/Sprunki Monomix.png",
    "url": "https://wowtbc.net/sprunkin/monomix/index.html",
    "description": "Home Squidki Monomix Squidki Monomix 583 votes Squidki Monomix Mod is a minimalist yet powerful S...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Compas",
    "icon": "/images/new_mods/Sprunki Compas.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-compas/index.html",
    "description": "Home Squidki Compas Squidki Compas 583 votes Squidki Compas Mod is a rhythmically rich Squidki mo...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprudzi",
    "icon": "/images/new_mods/Sprunki Sprudzi.png",
    "url": "https://wowtbc.net/sprunkin/sprudzi/index.html",
    "description": "Home Squidki Sprudzi Squidki Sprudzi 583 votes Squidki Sprudzi Mod is a dynamic and energetic Spr...",
    "type": "New Mods"
  },
  {
    "name": "Sprunky Tree Friends Re-Natured",
    "icon": "/images/new_mods/Sprunky Tree Friends Re-Natured.png",
    "url": "https://wowtbc.net/sprunkin/sprunky-tree-friends/index.html",
    "description": "Home Sprunky Tree Friends Re-Natured Sprunky Tree Friends Re-Natured 583 votes Sprunky Tree Frien...",
    "type": "New Mods"
  },
  {
    "name": "Sprunci Phase 2",
    "icon": "/images/new_mods/Sprunci Phase 2.png",
    "url": "https://wowtbc.net/sprunkin/sprunci-phase2/index.html",
    "description": "Home Sprunci Phase 2 Sprunci Phase 2 583 votes Sprunci Phase 2 Mod is the electrifying sequel in ...",
    "type": "New Mods"
  },
  {
    "name": "NumberSquidki Retake",
    "icon": "/images/new_mods/NumberSquidki Retake.png",
    "url": "https://wowtbc.net/sprunkin/numberSquidki/index.html",
    "description": "Home NumberSquidki Retake NumberSquidki Retake 583 votes NumberSquidki Retake Mod is a thrilling ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunkonitkers",
    "icon": "/images/new_mods/Sprunki Sprunkonitkers.png",
    "url": "https://wowtbc.net/sprunkin/sprunkonitkers/index.html",
    "description": "Home Squidki Sprunkonitkers Squidki Sprunkonitkers 583 votes Squidki Sprunkonitkers Mod is an exc...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunci Pyramix Look",
    "icon": "/images/new_mods/Sprunki Sprunci Pyramix Look.png",
    "url": "https://wowtbc.net/sprunkin/sprunci-pyramix-look/index.html",
    "description": "Home Squidki Sprunci Pyramix Look Squidki Sprunci Pyramix Look 583 votes Squidki Sprunci Pyramix ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Dandy's Twotake",
    "icon": "/images/new_mods/Sprunki Dandy's Twotake.png",
    "url": "https://wowtbc.net/sprunkin/dandy-twotake/index.html",
    "description": "Home Squidki Dandy's Twotake Squidki Dandy's Twotake 583 votes Squidki Dandy's Twotake is a uniqu...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed: Animated Happy Mod",
    "icon": "/images/new_mods/Sprunki Pyramixed- Animated Happy Mod.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed-animated/index.html",
    "description": "Home Squidki Pyramixed: Animated Happy Mod Squidki Pyramixed: Animated Happy Mod 583 votes Sprunk...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Star & Heart",
    "icon": "/images/new_mods/Squidki- Star & Heart.png",
    "url": "https://wowtbc.net/sprunkin/star-heart/index.html",
    "description": "Home Squidki: Star & Heart Squidki: Star & Heart 583 votes Squidki Star and Heart Mod is a bright...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Swap Repost",
    "icon": "/images/new_mods/Sprunki Swap Repost.png",
    "url": "https://wowtbc.net/sprunkin/swap-repost/index.html",
    "description": "Home Squidki Swap Repost Squidki Swap Repost 583 votes Squidki Swap Repost Mod is a unique remix ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Modded 4.0",
    "icon": "/images/new_mods/Sprunki Modded 4.0.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-modded4/index.html",
    "description": "Home Squidki Modded 4.0 Squidki Modded 4.0 583 votes Squidki Modded 4.0 Mod is the latest evoluti...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Chaotic Good Parasite",
    "icon": "/images/new_mods/Sprunki Chaotic Good Parasite.png",
    "url": "https://wowtbc.net/sprunkin/chaotic-good-parasite/index.html",
    "description": "Home Squidki Chaotic Good Parasite Squidki Chaotic Good Parasite 583 votes Squidki Chaotic Good P...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Jamming Mini Mod",
    "icon": "/images/new_mods/Sprunki Jamming Mini Mod.png",
    "url": "https://wowtbc.net/sprunkin/jamming/index.html",
    "description": "Home Squidki Jamming Mini Mod Squidki Jamming Mini Mod 583 votes Squidki Jamming Mini Mod is a co...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake But Sprunksters",
    "icon": "/images/new_mods/Sprunki Retake But Sprunksters.png",
    "url": "https://wowtbc.net/sprunkin/sprunksters-retake/index.html",
    "description": "Home Squidki Retake But Sprunksters Squidki Retake But Sprunksters 583 votes Squidki Retake But S...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked But Sprinkle",
    "icon": "/images/new_mods/Sprunked But Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-sprinkle/index.html",
    "description": "Home Sprunked But Sprinkle Sprunked But Sprinkle 583 votes Sprunked But Sprinkle is a modified ve...",
    "type": "New Mods"
  },
  {
    "name": "V8 Dystopia: Squidki Style Edition",
    "icon": "/images/new_mods/V8 Dystopia- Squidki Style Edition.png",
    "url": "https://wowtbc.net/sprunkin/v8-dystopia/index.html",
    "description": "Home V8 Dystopia: Squidki Style Edition V8 Dystopia: Squidki Style Edition 583 votes V8 Dystopia ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked MDP Version",
    "icon": "/images/new_mods/Sprunked MDP Version.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-mdp/index.html",
    "description": "Home Sprunked MDP Version Sprunked MDP Version 583 votes Sprunked MDP Version Mod is an enhanced ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Kiss Edition: Tunner Kiss Jevin",
    "icon": "/images/new_mods/Sprunki Kiss Edition- Tunner Kiss Jevin.png",
    "url": "https://wowtbc.net/sprunkin/tunner-kiss-jevin/index.html",
    "description": "Home Squidki Kiss Edition: Tunner Kiss Jevin Squidki Kiss Edition: Tunner Kiss Jevin 583 votes Sp...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Swap 2",
    "icon": "/images/new_mods/Sprunki Swap 2.png",
    "url": "https://wowtbc.net/sprunkin/swap2/index.html",
    "description": "Home Squidki Swap 2 Squidki Swap 2 583 votes Squidki Swap 2 Mod is the exciting sequel to the ori...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Oren X Simon",
    "icon": "/images/new_mods/Squidki- Oren X Simon.png",
    "url": "https://wowtbc.net/sprunkin/oren-x-simon/index.html",
    "description": "Home Squidki: Oren X Simon Squidki: Oren X Simon 583 votes Squidki Oren X Simon Mod is an excitin...",
    "type": "New Mods"
  },
  {
    "name": "Sprunksters Human Edition",
    "icon": "/images/new_mods/Sprunksters Human Edition.png",
    "url": "https://wowtbc.net/sprunkin/sprunksters-human1/index.html",
    "description": "Home Sprunksters Human Edition Sprunksters Human Edition 583 votes Sprunksters Human Edition ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Metahide V1",
    "icon": "/images/new_mods/Sprunki Metahide V1.png",
    "url": "https://wowtbc.net/sprunkin/metahidev1/index.html",
    "description": "Home Squidki Metahide V1 Squidki Metahide V1 583 votes Squidki Metahide V1 Mod introduces a uniqu...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Definitive Phase 4 New Ver.",
    "icon": "/images/new_mods/Sprunki Definitive Phase 4 New Ver..png",
    "url": "https://wowtbc.net/sprunkin/definitive-phase4-new/index.html",
    "description": "Home Squidki Definitive Phase 4 New Ver. Squidki Definitive Phase 4 New Ver. 583 votes Squidki De...",
    "type": "New Mods"
  },
  {
    "name": "Blast Squidki",
    "icon": "/images/new_mods/Blast Sprinkle.png",
    "url": "https://html5.gamemonetize.co/0koq56k6nldcn2ztz4ir2x0fxnszcl1w/",
    "description": "Home Blast Squidki Blast Squidki 583 votes Blast Squidki invites you into a whimsical adventure w...",
    "type": "New Mods"
  },
  {
    "name": "Squidki RedSun",
    "icon": "/images/new_mods/Sprunki RedSun.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-redsun/index.html",
    "description": "Home Squidki RedSun Squidki RedSun 583 votes Squidki Red Sun Mod plunges the Squidki universe int...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Better & Cooler",
    "icon": "/images/new_mods/Sprunki But Better & Cooler.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-better-cooler/index.html",
    "description": "Home Squidki But Better & Cooler Squidki But Better & Cooler 583 votes Squidki But Better & Coole...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Mega",
    "icon": "/images/new_mods/Sprunki Mega.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-mega/index.html",
    "description": "Home Squidki Mega Squidki Mega 583 votes Squidki Mega Mod is an expanded and upgraded version of ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Dugs",
    "icon": "/images/new_mods/Sprunked Dugs.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-dugs/index.html",
    "description": "Home Sprunked Dugs Sprunked Dugs 583 votes Sprunked Dugs Mod is a modified version of the origina...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Splash",
    "icon": "/images/new_mods/Sprunki Splash.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-splash/index.html",
    "description": "Home Squidki Splash Squidki Splash 583 votes Squidki Splash Mod brings a water-themed twist to th...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Anime",
    "icon": "/images/new_mods/Sprunki Anime.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-anime/index.html",
    "description": "Home Squidki Anime Squidki Anime 583 votes Squidki Anime Mod brings a vibrant anime-inspired twis...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But They Got Healed",
    "icon": "/images/new_mods/Sprunki But They Got Healed.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-healed/index.html",
    "description": "Home Squidki But They Got Healed Squidki But They Got Healed 583 votes Squidki But They Got Heale...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Squid Game",
    "icon": "/images/new_mods/Sprunki But Squid Game.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-squid-game/index.html",
    "description": "Home Squidki But Squid Game Squidki But Squid Game 583 votes Squidki But Squid Game brings the in...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Redone",
    "icon": "/images/new_mods/Sprunki Redone.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-redone/index.html",
    "description": "Home Squidki Redone Squidki Redone 583 votes Squidki Redone is a complete overhaul of the origina...",
    "type": "New Mods"
  },
  {
    "name": "SquidkiBot 2",
    "icon": "/images/new_mods/SquidkiBot 2.png",
    "url": "https://wowtbc.net/sprunkin/Squidkibot2/index.html",
    "description": "Home SquidkiBot 2 SquidkiBot 2 583 votes SquidkiBot 2 is an advanced evolution of the original Sp...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Better OSC",
    "icon": "/images/new_mods/Sprunki But Better OSC.png",
    "url": "https://wowtbc.net/sprunkin/better-osc/index.html",
    "description": "Home Squidki But Better OSC Squidki But Better OSC 583 votes The Squidki But Better OSC mod takes...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Punki Google",
    "icon": "/images/new_mods/Sprunki Punki Google.png",
    "url": "https://wowtbc.net/sprunkin/punki-google/index.html",
    "description": "Home Squidki Punki Google Squidki Punki Google 583 votes The Squidki Punki Google Mod introduces ...",
    "type": "New Mods"
  },
  {
    "name": "SprunBFDIA Again",
    "icon": "/images/new_mods/SprunBFDIA Again.png",
    "url": "https://wowtbc.net/sprunkin/sprunbfdia/index.html",
    "description": "Home SprunBFDIA Again SprunBFDIA Again 583 votes The SprunBFDIA Again Mod is an exciting crossove...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Skrunchy",
    "icon": "/images/new_mods/Sprunki Skrunchy.png",
    "url": "https://wowtbc.net/sprunkin/skrunchy/index.html",
    "description": "Home Squidki Skrunchy Squidki Skrunchy 583 votes 🎶 Squidki Skrunchy – A Bouncy, Energetic Remix ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sproonkly",
    "icon": "/images/new_mods/Sprunki Sproonkly.png",
    "url": "https://wowtbc.net/sprunkin/sproonkly/index.html",
    "description": "Home Squidki Sproonkly Squidki Sproonkly 583 votes 🎶 Squidki Sproonkly – A Wacky and Energetic R...",
    "type": "New Mods"
  },
  {
    "name": "Squidki New Night",
    "icon": "/images/new_mods/Sprunki New Night.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-new-look/index.html",
    "description": "Home Squidki New Night Squidki New Night 583 votes 🎶 Squidki New Night – A Fresh Remix of the Sp...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 10 RP",
    "icon": "/images/new_mods/Sprunki Phase 10 RP.png",
    "url": "https://wowtbc.net/sprunkin/phase10rp/index.html",
    "description": "Home Squidki Phase 10 RP Squidki Phase 10 RP 583 votes 🎶 Squidki Phase 10 RP – The Ultimate Role...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Reimagined",
    "icon": "/images/new_mods/Sprunked Reimagined.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-reimagined/index.html",
    "description": "Home Sprunked Reimagined Sprunked Reimagined 583 votes 🎶 Sprunked Reimagined Mod – A Bold New Ta...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spwalki",
    "icon": "/images/new_mods/Sprunki Spwalki.png",
    "url": "https://wowtbc.net/sprunkin/spwalki/index.html",
    "description": "Home Squidki Spwalki Squidki Spwalki 583 votes 🎶 Squidki Spwalki Mod – A Fusion of Rhythm and My...",
    "type": "New Mods"
  },
  {
    "name": "SquidkiPhobia",
    "icon": "/images/new_mods/SquidkiPhobia.png",
    "url": "https://wowtbc.net/sprunkin/Squidkiphobia/index.html",
    "description": "Home SquidkiPhobia SquidkiPhobia 583 votes 🎶 Squidkiphobia Mod – A Nightmare-Fueled Musical Jour...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Barasite",
    "icon": "/images/new_mods/Sprunki Barasite.png",
    "url": "https://wowtbc.net/sprunkin/barasite/index.html",
    "description": "Home Squidki Barasite Squidki Barasite 583 votes 🎶 Squidki Barasite Mod – A Dark and Thrilling M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3 Octatheredrawer Version",
    "icon": "/images/new_mods/Sprunki Phase 3 Octatheredrawer Version.png",
    "url": "https://wowtbc.net/sprunkin/phase3-octatheredrawer/index.html",
    "description": "Home Squidki Phase 3 Octatheredrawer Version Squidki Phase 3 Octatheredrawer Version 583 votes 🎶...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Fun Guinea Pig",
    "icon": "/images/new_mods/Sprunki Fun Guinea Pig.png",
    "url": "https://wowtbc.net/sprunkin/fun-guinea/index.html",
    "description": "Home Squidki Fun Guinea Pig Squidki Fun Guinea Pig 583 votes 🎶 Squidki Fun Guinea Pig Mod – A Fu...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Summer Time",
    "icon": "/images/new_mods/Sprunki Summer Time.png",
    "url": "https://wowtbc.net/sprunkin/summer-time1/index.html",
    "description": "Home Squidki Summer Time Squidki Summer Time 583 votes 🎶 Squidki Summer Time Mod – A Sun-Soaked ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Parodybox But Kids",
    "icon": "/images/new_mods/Sprunki Parodybox But Kids.png",
    "url": "https://wowtbc.net/sprunkin/parodybox-babies/index.html",
    "description": "Home Squidki Parodybox But Kids Squidki Parodybox But Kids 583 votes 🎶 Squidki Parodybox But Kid...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Banana Porridge",
    "icon": "/images/new_mods/Sprunki Banana Porridge.png",
    "url": "https://wowtbc.net/sprunkin/banana-porridge/index.html",
    "description": "Home Squidki Banana Porridge Squidki Banana Porridge 583 votes 🎶 Squidki Banana Porridge Mod – A...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Parasite Remake",
    "icon": "/images/new_mods/Sprunked Parasite Remake.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-parasite-remake/index.html",
    "description": "Home Sprunked Parasite Remake Sprunked Parasite Remake 583 votes 🎶 Sprunked Parasite Remake – A ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki New Look",
    "icon": "/images/new_mods/Sprunki New Look.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-new-look/index.html",
    "description": "Home Squidki New Look Squidki New Look 583 votes 🎶 Squidki New Look – A Fresh Take on the Origin...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3 RM But All Alive",
    "icon": "/images/new_mods/Sprunki Phase 3 RM But All Alive.png",
    "url": "https://wowtbc.net/sprunkin/phase3-rm-alive/index.html",
    "description": "Home Squidki Phase 3 RM But All Alive Squidki Phase 3 RM But All Alive 583 votes 🎶 Squidki Phase...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Niiku Reimagined",
    "icon": "/images/new_mods/Sprunki Niiku Reimagined.png",
    "url": "https://wowtbc.net/sprunkin/niiku-reimagened/index.html",
    "description": "Home Squidki Niiku Reimagined Squidki Niiku Reimagined 583 votes 🎶 Squidki Niiku Reimagined – A ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Dusty Edition",
    "icon": "/images/new_mods/Sprunki Dusty Edition.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-dusty-edition/index.html",
    "description": "Home Squidki Dusty Edition Squidki Dusty Edition 583 votes 🎶 Squidki Dusty Edition – A Retro Rem...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunksters Alive",
    "icon": "/images/new_mods/Sprunki Sprunksters Alive.png",
    "url": "https://wowtbc.net/sprunkin/sprunksters-alive/index.html",
    "description": "Home Squidki Sprunksters Alive Squidki Sprunksters Alive 583 votes 🎶 Squidki Sprunksters Alive –...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 5 But 11 Polos",
    "icon": "/images/new_mods/Sprunki Phase 5 But 11 Polos.png",
    "url": "https://wowtbc.net/sprunkin/phase5-11slots/index.html",
    "description": "Home Squidki Phase 5 But 11 Polos Squidki Phase 5 But 11 Polos 583 votes 🎶 Squidki Phase 5 But 1...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake Updated",
    "icon": "/images/new_mods/Sprunki Retake Updated.png",
    "url": "https://wowtbc.net/sprunkin/retake-update/index.html",
    "description": "Home Squidki Retake Updated Squidki Retake Updated 583 votes 🎶 Squidki Retake Updated – The Ulti...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Remade",
    "icon": "/images/new_mods/Sprunki Remade.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-remade/index.html",
    "description": "Home Squidki Remade Squidki Remade 583 votes 🎶 Squidki Remade – A Freshly Upgraded Squidki Exper...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Fruity",
    "icon": "/images/new_mods/Sprunki But Fruity.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-fruity/index.html",
    "description": "Home Squidki But Fruity Squidki But Fruity 583 votes 🎶 Squidki But Fruity – A Juicy Remix of Bea...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Ozzybox 2.0",
    "icon": "/images/new_mods/Sprunki Ozzybox 2.0.png",
    "url": "https://wowtbc.net/sprunkin/ozzybox2/index.html",
    "description": "Home Squidki Ozzybox 2.0 Squidki Ozzybox 2.0 583 votes 🎶 Ozzybox Squidki 2.0 – The Ultimate Fusi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed But Robot",
    "icon": "/images/new_mods/Sprunki Pyramixed But Robot.png",
    "url": "https://wowtbc.net/sprunkin/pyramix-but-robot/index.html",
    "description": "Home Squidki Pyramixed But Robot Squidki Pyramixed But Robot 583 votes 🎶 Squidki Pyramixed But R...",
    "type": "New Mods"
  },
  {
    "name": "Squidki MSI",
    "icon": "/images/new_mods/Sprunki MSI.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-msi/index.html",
    "description": "Home Squidki MSI Squidki MSI 583 votes 🎶 Squidki MSI – A Multi-Style Beat Extravaganza! 🎛️🎤🔥 ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake But It's Blockies",
    "icon": "/images/new_mods/Sprunki Retake But It's Blockies.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-blockies/index.html",
    "description": "Home Squidki Retake But It's Blockies Squidki Retake But It's Blockies 583 votes 🎶 Squidki Retak...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Poppy Playtime Phase 5",
    "icon": "/images/new_mods/Sprunki Poppy Playtime Phase 5.png",
    "url": "https://wowtbc.net/sprunkin/poppy-phase5/index.html",
    "description": "Home Squidki Poppy Playtime Phase 5 Squidki Poppy Playtime Phase 5 583 votes 🎶 Squidki Poppy Pla...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Red vs Plants",
    "icon": "/images/new_mods/Sprunki Red vs Plants.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-red-plants/index.html",
    "description": "Home Squidki Red vs Plants Squidki Red vs Plants 583 votes Get ready for an explosive musical sho...",
    "type": "New Mods"
  },
  {
    "name": "Squidki City York Phase 2",
    "icon": "/images/new_mods/Sprunki City York Phase 2.png",
    "url": "https://wowtbc.net/sprunkin/city-york-phase2/index.html",
    "description": "Home Squidki City York Phase 2 Squidki City York Phase 2 583 votes 🎶 Squidki City York Phase 2 –...",
    "type": "New Mods"
  },
  {
    "name": "Squidkibox Spruns",
    "icon": "/images/new_mods/Squidkibox Spruns.png",
    "url": "https://wowtbc.net/sprunkin/Squidkibox-spruns/index.html",
    "description": "Home Squidkibox Spruns Squidkibox Spruns 583 votes 🎶 Squidkibox Spruns – A Fresh Spin on Squidki...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed Phase 2 Remake",
    "icon": "/images/new_mods/Sprunki Pyramixed Phase 2 Remake.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed-phase2-remake/index.html",
    "description": "Home Squidki Pyramixed Phase 2 Remake Squidki Pyramixed Phase 2 Remake 583 votes 🎶 Squidki Pyram...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Funier",
    "icon": "/images/new_mods/Sprunki Funier.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-funier/index.html",
    "description": "Home Squidki Funier Squidki Funier 583 votes 🎶 Squidki Funier – The Ultimate Hilarious Remix! 😂...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3 Remaster But Real",
    "icon": "/images/new_mods/Sprunki Phase 3 Remaster But Real.png",
    "url": "https://wowtbc.net/sprunkin/phase3-remastered-real/index.html",
    "description": "Home Squidki Phase 3 Remaster But Real Squidki Phase 3 Remaster But Real 583 votes 🎶 Squidki Pha...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprinkle+",
    "icon": "/images/new_mods/Sprunki Sprinkle+.png",
    "url": "https://wowtbc.net/sprunkin/sprinkle+/index.html",
    "description": "Home Squidki Sprinkle+ Squidki Sprinkle+ 583 votes 🎶 Squidki Sprinkle+ Mod – A Burst of Musical ...",
    "type": "New Mods"
  },
  {
    "name": "Strawberry Jam but Squidki",
    "icon": "/images/new_mods/Strawberry Jam but Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/strawberry-Squidki/index.html",
    "description": "Home Strawberry Jam but Squidki Strawberry Jam but Squidki 583 votes 🎶 Strawberry Jam But Sprunk...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Clicker",
    "icon": "/images/new_mods/Sprunki Clicker.png",
    "url": "https://game.azgame.io/Squidki-clicker/",
    "description": "Home Squidki Clicker Squidki Clicker 583 votes 🎶 Squidki Clicker Mod – Tap into the World of Rhy...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Abgerny Retake",
    "icon": "/images/new_mods/Sprunki Abgerny Retake.png",
    "url": "https://wowtbc.net/sprunkin/abgerny-retake/index.html",
    "description": "Home Squidki Abgerny Retake Squidki Abgerny Retake 583 votes Step into a world of exciting creati...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Cremixed",
    "icon": "/images/new_mods/Sprunki Cremixed.png",
    "url": "https://wowtbc.net/sprunkin/cremixed/index.html",
    "description": "Home Squidki Cremixed Squidki Cremixed 583 votes Get ready to ignite your music-making experience...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Skrumped",
    "icon": "/images/new_mods/Sprunki Skrumped.png",
    "url": "https://wowtbc.net/sprunkin/skrumped/index.html",
    "description": "Home Squidki Skrumped Squidki Skrumped 583 votes Brace yourself for a wild ride with Squidki Skru...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 37",
    "icon": "/images/new_mods/Sprunki Phase 37.png",
    "url": "https://wowtbc.net/sprunkin/phase37/index.html",
    "description": "Home Squidki Phase 37 Squidki Phase 37 583 votes Welcome to the next chapter in Squidki's ever-ev...",
    "type": "New Mods"
  },
  {
    "name": "Squidki x Void",
    "icon": "/images/new_mods/Sprunki x Void.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-void/index.html",
    "description": "Home Squidki x Void Squidki x Void 583 votes Prepare for a hauntingly captivating musical experie...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Noob Block",
    "icon": "/images/new_mods/Sprunki But Noob Block.png",
    "url": "https://wowtbc.net/sprunkin/noob-blox/index.html",
    "description": "Home Squidki But Noob Block Squidki But Noob Block 583 votes Get ready to groove with a fun and b...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Funlers",
    "icon": "/images/new_mods/Sprunki Funlers.png",
    "url": "https://wowtbc.net/sprunkin/funlers/index.html",
    "description": "Home Squidki Funlers Squidki Funlers 583 votes Step into the playful world of Squidki Funlers, wh...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Orange vs Plants",
    "icon": "/images/new_mods/Sprunki Orange vs Plants.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-orange-plants/index.html",
    "description": "Home Squidki Orange vs Plants Squidki Orange vs Plants 583 votes 🎶 Squidki Orange vs Plants – A ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Venus",
    "icon": "/images/new_mods/Sprunki But Venus.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-venus/index.html",
    "description": "Home Squidki But Venus Squidki But Venus 583 votes Dive into a stellar crossover mod that combine...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed Lol",
    "icon": "/images/new_mods/Sprunki Pyramixed Lol.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed-lol/index.html",
    "description": "Home Squidki Pyramixed Lol Squidki Pyramixed Lol 583 votes The Squidki Pyramixed LOL Mod adds a p...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprankzed",
    "icon": "/images/new_mods/Sprunki Sprankzed.png",
    "url": "https://wowtbc.net/sprunkin/sprankzed/index.html",
    "description": "Home Squidki Sprankzed Squidki Sprankzed 583 votes The Squidki Sprankzed Mod delivers a quirky an...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Restyle",
    "icon": "/images/new_mods/Sprunki Restyle.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-restyle/index.html",
    "description": "Home Squidki Restyle Squidki Restyle 583 votes The Squidki Restyle Mod breathes new life into the...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Die with Smile",
    "icon": "/images/new_mods/Sprunki Die with Smile.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-die-withsmile/index.html",
    "description": "Home Squidki Die with Smile Squidki Die with Smile 583 votes The Squidki Die with Smile Mod bring...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Primitive",
    "icon": "/images/new_mods/Sprunki Primitive.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-primitive/index.html",
    "description": "Home Squidki Primitive Squidki Primitive 583 votes The Squidki Primitive Mod transports players t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 29",
    "icon": "/images/new_mods/Sprunki Phase 29.png",
    "url": "https://wowtbc.net/sprunkin/phase29/index.html",
    "description": "Home Squidki Phase 29 Squidki Phase 29 583 votes The Squidki Phase 29 Mod revolves around a mysti...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 33",
    "icon": "/images/new_mods/Sprunki Phase 33.png",
    "url": "https://wowtbc.net/sprunkin/phase33/index.html",
    "description": "Home Squidki Phase 33 Squidki Phase 33 583 votes The Squidki Phase 33 Mod takes players into a ch...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Lights Out",
    "icon": "/images/new_mods/Squidki- Lights Out.png",
    "url": "https://wowtbc.net/sprunkin/lights-out2/index.html",
    "description": "Home Squidki: Lights Out Squidki: Lights Out 583 votes The Squidki Lights Out Mod introduces an e...",
    "type": "New Mods"
  },
  {
    "name": "Squidkilarity But Mr Fun Computer",
    "icon": "/images/new_mods/Squidkilarity But Mr Fun Computer.png",
    "url": "https://wowtbc.net/sprunkin/Squidkilairity-mrfun/index.html",
    "description": "Home Squidkilarity But Mr Fun Computer Squidkilarity But Mr Fun Computer 583 votes The Squidkilar...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Human Edition",
    "icon": "/images/new_mods/Sprunki Retake- Human Edition.png",
    "url": "https://wowtbc.net/sprunkin/retake-human/index.html",
    "description": "Home Squidki Retake: Human Edition Squidki Retake: Human Edition 583 votes The Squidki Retake But...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 5 Archive",
    "icon": "/images/new_mods/Sprunki Phase 5 Archive.png",
    "url": "https://wowtbc.net/sprunkin/phase5-archive/index.html",
    "description": "Home Squidki Phase 5 Archive Squidki Phase 5 Archive 583 votes The Squidki Phase 5 Archive mod is...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Squidkier",
    "icon": "/images/new_mods/Sprunki Squidkier.png",
    "url": "https://wowtbc.net/sprunkin/Squidkier/index.html",
    "description": "Home Squidki Squidkier Squidki Squidkier 583 votes The Squidki Squidkier mod brings an exciting u...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Modded: Swap Edition",
    "icon": "/images/new_mods/Sprunki Modded- Swap Edition.png",
    "url": "https://wowtbc.net/sprunkin/swap-modded/index.html",
    "description": "Home Squidki Modded: Swap Edition Squidki Modded: Swap Edition 583 votes Squidki Modded: Swap Edi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki PASTEL!",
    "icon": "/images/new_mods/Sprunki PASTEL!.png",
    "url": "https://wowtbc.net/sprunkin/pastel-night/index.html",
    "description": "Home Squidki PASTEL! Squidki PASTEL! 583 votes The Squidki PASTEL! mod brings a soft and dreamy a...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Cool As Ice: Kayden & Friends",
    "icon": "/images/new_mods/Sprunki Cool As Ice- Kayden & Friends.png",
    "url": "https://wowtbc.net/sprunkin/coolasice-kayden/index.html",
    "description": "Home Squidki Cool As Ice: Kayden & Friends Squidki Cool As Ice: Kayden & Friends 583 votes Sprunk...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3: Remastered 3.5",
    "icon": "/images/new_mods/Sprunki Phase 3- Remastered 3.5.png",
    "url": "https://wowtbc.net/sprunkin/phase3-remastered3.5/index.html",
    "description": "Home Squidki Phase 3: Remastered 3.5 Squidki Phase 3: Remastered 3.5 583 votes Squidki Phase 3: R...",
    "type": "New Mods"
  },
  {
    "name": "Plants vs Squidki Blue",
    "icon": "/images/new_mods/Plants vs Squidki Blue.png",
    "url": "https://wowtbc.net/sprunkin/plants-vs-Squidkiblue/index.html",
    "description": "Home Plants vs Squidki Blue Plants vs Squidki Blue 583 votes The Plants vs Squidki Blue Mod is a ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Schoolhouse Trouble Babies 3.0",
    "icon": "/images/new_mods/Sprunki Schoolhouse Trouble Babies 3.0.png",
    "url": "https://wowtbc.net/sprunkin/schoolhouse-trouble3/index.html",
    "description": "Home Squidki Schoolhouse Trouble Babies 3.0 Squidki Schoolhouse Trouble Babies 3.0 583 votes The ...",
    "type": "New Mods"
  },
  {
    "name": "Agent Squidkis",
    "icon": "/images/new_mods/Agent Squidkis.png",
    "url": "https://wowtbc.net/sprunkin/agent-Squidkis/index.html",
    "description": "Home Agent Squidkis Agent Squidkis 583 votes Squidkis Agent Mod brings a thrilling spy-inspired t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Hot Like Lava",
    "icon": "/images/new_mods/Sprunki Hot Like Lava.png",
    "url": "https://wowtbc.net/sprunkin/hot-like-lave1/index.html",
    "description": "Home Squidki Hot Like Lava Squidki Hot Like Lava 583 votes The Squidki Hot Like Lava Mod brings t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Rotrizi 2.0",
    "icon": "/images/new_mods/Sprunki Rotrizi 2.0.png",
    "url": "https://wowtbc.net/sprunkin/rotrizi2/index.html",
    "description": "Home Squidki Rotrizi 2.0 Squidki Rotrizi 2.0 583 votes The Squidki Rotrizi 2.0 Mod is a highly an...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 12 Remastered",
    "icon": "/images/new_mods/Sprunki Phase 12 Remastered.png",
    "url": "https://wowtbc.net/sprunkin/phase12-remastered/index.html",
    "description": "Home Squidki Phase 12 Remastered Squidki Phase 12 Remastered 583 votes The Squidki Phase 12 Remas...",
    "type": "New Mods"
  },
  {
    "name": "Squidkilairity Retake Original",
    "icon": "/images/new_mods/Squidkilairity Retake Original.png",
    "url": "https://wowtbc.net/sprunkin/Squidkilairity-retake-original/index.html",
    "description": "Home Squidkilairity Retake Original Squidkilairity Retake Original 583 votes The Squidkilairity R...",
    "type": "New Mods"
  },
  {
    "name": "Qoobies But Squidki",
    "icon": "/images/new_mods/Qoobies But Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/qoobies-but-Squidki/index.html",
    "description": "Home Qoobies But Squidki Qoobies But Squidki 583 votes The Qoobies But Squidki Mod is a creative ...",
    "type": "New Mods"
  },
  {
    "name": "Spruted Pyramix",
    "icon": "/images/new_mods/Spruted Pyramix.png",
    "url": "https://wowtbc.net/sprunkin/spruted-pyramix/index.html",
    "description": "Home Spruted Pyramix Spruted Pyramix 583 votes The Spruted Pyramix Mod brings a fresh and dynamic...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked x Squidki But They All Alive",
    "icon": "/images/new_mods/Sprunked x Squidki But They All Alive.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-x-Squidki-alive/index.html",
    "description": "Home Sprunked x Squidki But They All Alive Sprunked x Squidki But They All Alive 583 votes The Sp...",
    "type": "New Mods"
  },
  {
    "name": "Countrybox Squidki Phase 777",
    "icon": "/images/new_mods/Countrybox Squidki Phase 777.png",
    "url": "https://wowtbc.net/sprunkin/countrybox-phase777/index.html",
    "description": "Home Countrybox Squidki Phase 777 Countrybox Squidki Phase 777 583 votes The Countrybox Squidki P...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunksters",
    "icon": "/images/new_mods/Sprunki Sprunksters.png",
    "url": "https://wowtbc.net/sprunkin/sprunksters/index.html",
    "description": "Home Squidki Sprunksters Squidki Sprunksters 583 votes The Squidki Sprunksters Mod introduces a l...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Deluxe Edition",
    "icon": "/images/new_mods/Sprunki Deluxe Edition.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-deluxe/index.html",
    "description": "Home Squidki Deluxe Edition Squidki Deluxe Edition 583 votes The Squidki Deluxe Edition Mod takes...",
    "type": "New Mods"
  },
  {
    "name": "Squidki YUBIN NIIKU 2: The Deaths of Fun",
    "icon": "/images/new_mods/Sprunki YUBIN NIIKU 2- The Deaths of Fun.png",
    "url": "https://wowtbc.net/sprunkin/yubin-niiku2-death/index.html",
    "description": "Home Squidki YUBIN NIIKU 2: The Deaths of Fun Squidki YUBIN NIIKU 2: The Deaths of Fun 583 votes ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Hospit",
    "icon": "/images/new_mods/Sprunki Hospit.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-hospit/index.html",
    "description": "Home Squidki Hospit Squidki Hospit 583 votes The Squidki Hospit Mod takes players into a hospital...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed But Phase 3",
    "icon": "/images/new_mods/Sprunki Pyramixed But Phase 3.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed-phase3/index.html",
    "description": "Home Squidki Pyramixed But Phase 3 Squidki Pyramixed But Phase 3 583 votes The Squidki Pyramixed ...",
    "type": "New Mods"
  },
  {
    "name": "Kino Sprunked 2.0 Extra Animation",
    "icon": "/images/new_mods/Kino Sprunked 2.0 Extra Animation.png",
    "url": "https://wowtbc.net/sprunkin/kino-sprunked2-animation/index.html",
    "description": "Home Kino Sprunked 2.0 Extra Animation Kino Sprunked 2.0 Extra Animation 583 votes The Kino Sprun...",
    "type": "New Mods"
  },
  {
    "name": "Squidki School House Trouble Babies 2.0",
    "icon": "/images/new_mods/Sprunki School House Trouble Babies 2.0.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-babies2/index.html",
    "description": "Home Squidki School House Trouble Babies 2.0 Squidki School House Trouble Babies 2.0 583 votes Th...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 21",
    "icon": "/images/new_mods/Sprunki Phase 21.png",
    "url": "https://wowtbc.net/sprunkin/phase21/index.html",
    "description": "Home Squidki Phase 21 Squidki Phase 21 583 votes The Squidki Phase 21 Mod pushes the boundaries o...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Danger Infected Virus",
    "icon": "/images/new_mods/Sprunki Danger Infected Virus.png",
    "url": "https://wowtbc.net/sprunkin/danger-infected-virus/index.html",
    "description": "Home Squidki Danger Infected Virus Squidki Danger Infected Virus 583 votes The Squidki Danger Inf...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkedlairity",
    "icon": "/images/new_mods/Sprunkedlairity.png",
    "url": "https://wowtbc.net/sprunkin/Squidkilairity-sprunked/index.html",
    "description": "Home Sprunkedlairity Sprunkedlairity 583 votes The Sprunkedlairity Mod takes inspiration from the...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3 Re-Skin",
    "icon": "/images/new_mods/Sprunki Phase 3 Re-Skin.png",
    "url": "https://wowtbc.net/sprunkin/phase3-reskin1/index.html",
    "description": "Home Squidki Phase 3 Re-Skin Squidki Phase 3 Re-Skin 583 votes The Squidki Phase 3 Re-skin Mod br...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Rebranded Remake",
    "icon": "/images/new_mods/Sprunki Rebranded Remake.png",
    "url": "https://wowtbc.net/sprunkin/rebranded-remake/index.html",
    "description": "Home Squidki Rebranded Remake Squidki Rebranded Remake 583 votes The Squidki Rebranded Remake Mod...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Corruptbox 5",
    "icon": "/images/new_mods/Sprunki Corruptbox 5.png",
    "url": "https://wowtbc.net/sprunkin/corruptbox5/index.html",
    "description": "Home Squidki Corruptbox 5 Squidki Corruptbox 5 583 votes Squidki Corruptbox 5 Mod, also known as ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunged",
    "icon": "/images/new_mods/Sprunki Sprunged.png",
    "url": "https://wowtbc.net/sprunkin/sprunged/index.html",
    "description": "Home Squidki Sprunged Squidki Sprunged 583 votes The Squidki Sprunged Mod is an exciting addition...",
    "type": "New Mods"
  },
  {
    "name": "ParaSquidki The Past",
    "icon": "/images/new_mods/ParaSquidki The Past.png",
    "url": "https://wowtbc.net/sprunkin/retake-update/index.html",
    "description": "Home ParaSquidki The Past ParaSquidki The Past 583 votes ParaSquidki: The Past Mod takes players ...",
    "type": "New Mods"
  },
  {
    "name": "Squidkilairity Amoral",
    "icon": "/images/new_mods/Squidkilairity Amoral.png",
    "url": "https://wowtbc.net/sprunkin/Squidkilairity-amoral/index.html",
    "description": "Home Squidkilairity Amoral Squidkilairity Amoral 583 votes The Squidkilairity Amoral Mod is a tho...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake Phase 4",
    "icon": "/images/new_mods/Sprunki Retake Phase 4.png",
    "url": "https://wowtbc.net/sprunkin/retake-phase4/index.html",
    "description": "Home Squidki Retake Phase 4 Squidki Retake Phase 4 583 votes The Squidki Retake Phase 4 Mod is a ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spelunke Monkes",
    "icon": "/images/new_mods/Sprunki Spelunke Monkes.png",
    "url": "https://wowtbc.net/sprunkin/spelunke/index.html",
    "description": "Home Squidki Spelunke Monkes Squidki Spelunke Monkes 583 votes The Squidki Spelunke Monkes Mod ad...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3 Alive",
    "icon": "/images/new_mods/Sprunki Phase 3 Alive.png",
    "url": "https://wowtbc.net/sprunkin/phase3-alive/index.html",
    "description": "Home Squidki Phase 3 Alive Squidki Phase 3 Alive 583 votes The Squidki Phase 3 Alive Mod breathes...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Everyone is Clukr",
    "icon": "/images/new_mods/Sprunki But Everyone is Clukr.png",
    "url": "https://wowtbc.net/sprunkin/everyone-clukr/index.html",
    "description": "Home Squidki But Everyone is Clukr Squidki But Everyone is Clukr 583 votes The Squidki But Everyo...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Lobotomy Reskin Phase 3",
    "icon": "/images/new_mods/Sprunki Lobotomy Reskin Phase 3.png",
    "url": "https://wowtbc.net/sprunkin/lobotomy-reskin-phase3/index.html",
    "description": "Home Squidki Lobotomy Reskin Phase 3 Squidki Lobotomy Reskin Phase 3 583 votes The Squidki Loboto...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunkhead",
    "icon": "/images/new_mods/Sprunki Sprunkhead.png",
    "url": "https://wowtbc.net/sprunkin/sprunkhead/index.html",
    "description": "Home Squidki Sprunkhead Squidki Sprunkhead 583 votes The Squidki Sprunkhead Mod introduces a play...",
    "type": "New Mods"
  },
  {
    "name": "Parodybox But Squidki Cool",
    "icon": "/images/new_mods/Parodybox But Squidki Cool.png",
    "url": "https://wowtbc.net/sprunkin/parodybox-but-Squidkicool/index.html",
    "description": "Home Parodybox But Squidki Cool Parodybox But Squidki Cool 583 votes The Parodybox but Squidki CO...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkr Retake",
    "icon": "/images/new_mods/Sprunkr Retake.png",
    "url": "https://wowtbc.net/sprunkin/sprunkr-retake/index.html",
    "description": "Home Sprunkr Retake Sprunkr Retake 583 votes The Sprunkr Retake Mod is a revamped version of the ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 5 Remake V3",
    "icon": "/images/new_mods/Sprunki Phase 5 Remake V3.png",
    "url": "https://wowtbc.net/sprunkin/phase5-remakev3/index.html",
    "description": "Home Squidki Phase 5 Remake V3 Squidki Phase 5 Remake V3 583 votes The Squidki Phase 5 Remake V3 ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Junkr",
    "icon": "/images/new_mods/Sprunki Junkr.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-junkr/index.html",
    "description": "Home Squidki Junkr Squidki Junkr 583 votes The Squidki Junkr Mod is an exciting spin on the class...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Max Design Pro Phase 3",
    "icon": "/images/new_mods/Sprunki Max Design Pro Phase 3.png",
    "url": "https://wowtbc.net/sprunkin/max-design-phase3/index.html",
    "description": "Home Squidki Max Design Pro Phase 3 Squidki Max Design Pro Phase 3 583 votes Squidki Max Design P...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 71",
    "icon": "/images/new_mods/Sprunki Phase 71.png",
    "url": "https://wowtbc.net/sprunkin/phase71/index.html",
    "description": "Home Squidki Phase 71 Squidki Phase 71 583 votes Squidki Phase 71 brings a mystical and magical v...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 111",
    "icon": "/images/new_mods/Sprunki Phase 111.png",
    "url": "https://wowtbc.net/sprunkin/phase111/index.html",
    "description": "Home Squidki Phase 111 Squidki Phase 111 583 votes Squidki Phase 111 takes the Squidki experience...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But the Evening",
    "icon": "/images/new_mods/Sprunki But the Evening.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-evening/index.html",
    "description": "Home Squidki But the Evening Squidki But the Evening 583 votes Squidki But The Evening Mod brings...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sussy",
    "icon": "/images/new_mods/Sprunki Sussy.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sussy/index.html",
    "description": "Home Squidki Sussy Squidki Sussy 583 votes The Squidki Sussy Mod brings a quirky and playful twis...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Cool As Ice phase 69",
    "icon": "/images/new_mods/Sprunki Cool As Ice phase 69.png",
    "url": "https://wowtbc.net/sprunkin/coolasice-phase69/index.html",
    "description": "Home Squidki Cool As Ice phase 69 Squidki Cool As Ice phase 69 583 votes The Squidki Cool As Ice ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 365",
    "icon": "/images/new_mods/Sprunki Phase 365.png",
    "url": "https://wowtbc.net/sprunkin/phase365/index.html",
    "description": "Home Squidki Phase 365 Squidki Phase 365 583 votes The Squidki Phase 365 Mod introduces an expans...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Colorbox Red",
    "icon": "/images/new_mods/Sprunki Colorbox Red.png",
    "url": "https://wowtbc.net/sprunkin/colorbox-red/index.html",
    "description": "Home Squidki Colorbox Red Squidki Colorbox Red 583 votes The Squidki Colorbox Red Mod brings a vi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 5 Improve Version",
    "icon": "/images/new_mods/Sprunki Phase 5 Improve Version.png",
    "url": "https://wowtbc.net/sprunkin/phase5-improved/index.html",
    "description": "Home Squidki Phase 5 Improve Version Squidki Phase 5 Improve Version 583 votes The Squidki Phase ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Imagination",
    "icon": "/images/new_mods/Sprunki Imagination.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-imagination/index.html",
    "description": "Home Squidki Imagination Squidki Imagination 583 votes The Squidki Imagination Mod takes creativi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 5 Remastered",
    "icon": "/images/new_mods/Sprunki Phase 5 Remastered.png",
    "url": "https://wowtbc.net/sprunkin/phase5-remastered/index.html",
    "description": "Home Squidki Phase 5 Remastered Squidki Phase 5 Remastered 583 votes The Squidki Phase 5 Remaster...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Night Time Jam",
    "icon": "/images/new_mods/Sprunki Night Time Jam.png",
    "url": "https://wowtbc.net/sprunkin/night-time-jam/index.html",
    "description": "Home Squidki Night Time Jam Squidki Night Time Jam 583 votes The Squidki Night Time Jam Mod offer...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunkliy",
    "icon": "/images/new_mods/Sprunki Sprunkliy.png",
    "url": "https://wowtbc.net/sprunkin/sprunkliy/index.html",
    "description": "Home Squidki Sprunkliy Squidki Sprunkliy 583 votes The Squidki Sprunkliy Mod introduces a whimsic...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Numbers XFOHV",
    "icon": "/images/new_mods/Sprunki Numbers XFOHV.png",
    "url": "https://wowtbc.net/sprunkin/Numbers-XFOHV/index.html",
    "description": "Home Squidki Numbers XFOHV Squidki Numbers XFOHV 583 votes Squidki Numbers XFOHV Mod brings a mat...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 4 Reborn",
    "icon": "/images/new_mods/Sprunki Phase 4 Reborn.png",
    "url": "https://wowtbc.net/sprunkin/phase4-reborn/index.html",
    "description": "Home Squidki Phase 4 Reborn Squidki Phase 4 Reborn 583 votes Squidki Phase 4 Reborn breathes new ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 5 V2",
    "icon": "/images/new_mods/Sprunki Phase 5 V2.png",
    "url": "https://wowtbc.net/sprunkin/phase5v2/index.html",
    "description": "Home Squidki Phase 5 V2 Squidki Phase 5 V2 583 votes The Squidki Phase 5 V2 Mod is an enhanced an...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Wind As Storm",
    "icon": "/images/new_mods/Sprunki Wind As Storm.png",
    "url": "https://wowtbc.net/sprunkin/wind-storm/index.html",
    "description": "Home Squidki Wind As Storm Squidki Wind As Storm 583 votes The Squidki Wind As Storm Mod brings a...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunklisy",
    "icon": "/images/new_mods/Sprunki Sprunklisy.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sprunklisy/index.html",
    "description": "Home Squidki Sprunklisy Squidki Sprunklisy 583 votes The Squidki Sprunkr & Friends Mod introduces...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Sprunkr & Friends",
    "icon": "/images/new_mods/Squidki- Sprunkr & Friends.png",
    "url": "https://wowtbc.net/sprunkin/sprunkr-friends/index.html",
    "description": "Home Squidki: Sprunkr & Friends Squidki: Sprunkr & Friends 583 votes The Squidki Sprunkr & Friend...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Piratex",
    "icon": "/images/new_mods/Sprunki Piratex.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-piratex/index.html",
    "description": "Home Squidki Piratex Squidki Piratex 583 votes The Squidki PirateX Mod takes you on a swashbuckli...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spicy Phase 2",
    "icon": "/images/new_mods/Sprunki Spicy Phase 2.png",
    "url": "https://wowtbc.net/sprunkin/spicy-phase2/index.html",
    "description": "Home Squidki Spicy Phase 2 Squidki Spicy Phase 2 583 votes The Squidki Spicy Phase 2 Mod turns up...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Kingjax Edition",
    "icon": "/images/new_mods/Sprunki Kingjax Edition.png",
    "url": "https://wowtbc.net/sprunkin/kingjax-edition/index.html",
    "description": "Home Squidki Kingjax Edition Squidki Kingjax Edition 583 votes The Squidki Kingjax Edition Mod br...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Remastered 2.5",
    "icon": "/images/new_mods/Sprunki But Remastered 2.5.png",
    "url": "https://wowtbc.net/sprunkin/remaster2.5/index.html",
    "description": "Home Squidki But Remastered 2.5 Squidki But Remastered 2.5 583 votes The Squidki But Remastered 2...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sproink",
    "icon": "/images/new_mods/Sprunki Sproink.png",
    "url": "https://wowtbc.net/sprunkin/sproink/index.html",
    "description": "Home Squidki Sproink Squidki Sproink 583 votes The Squidki Sproink Mod brings a playful and bounc...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Gun Edition- Funbot out of Control",
    "icon": "/images/new_mods/Sprunki Gun Edition- Funbot out of Control.png",
    "url": "https://wowtbc.net/sprunkin/gun-edition-funbot/index.html",
    "description": "Home Squidki Gun Edition- Funbot out of Control Squidki Gun Edition- Funbot out of Control 583 vo...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkstard Mard",
    "icon": "/images/new_mods/Sprunkstard Mard.png",
    "url": "https://wowtbc.net/sprunkin/sprunkstard-mard/index.html",
    "description": "Home Sprunkstard Mard Sprunkstard Mard 583 votes The Sprunkstard Mard Mod is a creative twist on ...",
    "type": "New Mods"
  },
  {
    "name": "ParaSquidki NFE Update",
    "icon": "/images/new_mods/ParaSquidki NFE Update.png",
    "url": "https://wowtbc.net/sprunkin/paraSquidki-nfe/index.html",
    "description": "Home ParaSquidki NFE Update ParaSquidki NFE Update 583 votes The ParaSquidki NFE Update Mod takes...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Infection Black Phase 3",
    "icon": "/images/new_mods/Sprunki Infection Black Phase 3.png",
    "url": "https://wowtbc.net/sprunkin/infection-black-phase-3/index.html",
    "description": "Home Squidki Infection Black Phase 3 Squidki Infection Black Phase 3 583 votes The Squidki Infect...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Mass Infection",
    "icon": "/images/new_mods/Sprunki Mass Infection.png",
    "url": "https://wowtbc.net/sprunkin/mass-infection/index.html",
    "description": "Home Squidki Mass Infection Squidki Mass Infection 583 votes The Squidki Mass Infection Mod deliv...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Fren",
    "icon": "/images/new_mods/Sprunki Fren.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-fren/index.html",
    "description": "Home Squidki Fren Squidki Fren 583 votes The Squidki Fren Mod introduces a delightful and heartwa...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunkly",
    "icon": "/images/new_mods/Sprunki Sprunkly.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sprunkly/index.html",
    "description": "Home Squidki Sprunkly Squidki Sprunkly 583 votes The Squidki Sprunkly Mod is a vibrant and quirky...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Definitive Phase 4 But Alive",
    "icon": "/images/new_mods/Sprunki Definitive Phase 4 But Alive.png",
    "url": "https://wowtbc.net/sprunkin/definitive-phase4-alive/index.html",
    "description": "Home Squidki Definitive Phase 4 But Alive Squidki Definitive Phase 4 But Alive 583 votes Squidki ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked They Drunk",
    "icon": "/images/new_mods/Sprunked They Drunk.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-they-drunk/index.html",
    "description": "Home Sprunked They Drunk Sprunked They Drunk 583 votes Sprunked They Drunk Mod adds a humorous an...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Yubin Niiku: The Postal killer",
    "icon": "/images/new_mods/Sprunki Yubin Niiku- The Postal killer.png",
    "url": "https://wowtbc.net/sprunkin/yubin-killer/index.html",
    "description": "Home Squidki Yubin Niiku: The Postal killer Squidki Yubin Niiku: The Postal killer 583 votes The ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed: Night Edition",
    "icon": "/images/new_mods/Sprunki Pyramixed- Night Edition.png",
    "url": "https://wowtbc.net/sprunkin/pyramixed-night/index.html",
    "description": "Home Squidki Pyramixed: Night Edition Squidki Pyramixed: Night Edition 583 votes The Squidki Pyra...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkr AYOCS",
    "icon": "/images/new_mods/Sprunkr AYOCS.png",
    "url": "https://wowtbc.net/sprunkin/sprunkr-atocs/index.html",
    "description": "Home Sprunkr AYOCS Sprunkr AYOCS 583 votes The Sprunkr AYOCS Mod introduces a fresh and inventive...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Cool As Fire",
    "icon": "/images/new_mods/Sprunki Cool As Fire.png",
    "url": "https://wowtbc.net/sprunkin/cool-as-fire/index.html",
    "description": "Home Squidki Cool As Fire Squidki Cool As Fire 583 votes The Squidki Cool as Fire Mod turns up th...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Bunky",
    "icon": "/images/new_mods/Sprunki Bunky.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-bunky/index.html",
    "description": "Home Squidki Bunky Squidki Bunky 583 votes The Squidki Bunky Mod introduces a quirky and fun twis...",
    "type": "New Mods"
  },
  {
    "name": "Squidkilairity Swapped",
    "icon": "/images/new_mods/Squidkilairity Swapped.png",
    "url": "https://wowtbc.net/sprunkin/Squidkilairity-swapped/index.html",
    "description": "Home Squidkilairity Swapped Squidkilairity Swapped 583 votes The Squidkilairity Swapped Mod takes...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Parody OKHIDEMQ",
    "icon": "/images/new_mods/Sprunki Parody OKHIDEMQ.png",
    "url": "https://wowtbc.net/sprunkin/parody-OKHIDEMQ/index.html",
    "description": "Home Squidki Parody OKHIDEMQ Squidki Parody OKHIDEMQ 583 votes The Squidki Parody OKHIDEMQ Mod of...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Kosta Phase 4",
    "icon": "/images/new_mods/Sprunki Kosta Phase 4.png",
    "url": "https://wowtbc.net/sprunkin/kosta-phase4/index.html",
    "description": "Home Squidki Kosta Phase 4 Squidki Kosta Phase 4 583 votes The Squidki Kosta Phase 4 Mod is an ex...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Autumn Fields",
    "icon": "/images/new_mods/Sprunki Autumn Fields.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-autumn/index.html",
    "description": "Home Squidki Autumn Fields Squidki Autumn Fields 583 votes The Squidki Autumn Fields Mod captures...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3 Reimagined",
    "icon": "/images/new_mods/Sprunki Phase 3 Reimagined.png",
    "url": "https://wowtbc.net/sprunkin/phase3-reimage/index.html",
    "description": "Home Squidki Phase 3 Reimagined Squidki Phase 3 Reimagined 583 votes The Squidki Phase 3 Reimagin...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Infinite",
    "icon": "/images/new_mods/Sprunki Infinite.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-infinite/index.html",
    "description": "Home Squidki Infinite Squidki Infinite 583 votes The Squidki Infinite Mod takes the limitless cre...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 777 2.5",
    "icon": "/images/new_mods/Sprunki Phase 777 2.5.png",
    "url": "https://wowtbc.net/sprunkin/phase777-2.5/index.html",
    "description": "Home Squidki Phase 777 2.5 Squidki Phase 777 2.5 583 votes The Squidki Phase 777 2.5 Mod takes th...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Kosta Phase 3",
    "icon": "/images/new_mods/Sprunki Kosta Phase 3.png",
    "url": "https://wowtbc.net/sprunkin/kosta-phase-3/index.html",
    "description": "Home Squidki Kosta Phase 3 Squidki Kosta Phase 3 583 votes The Squidki Kosta Phase 3 Mod brings a...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Parodybox",
    "icon": "/images/new_mods/Sprunki Parodybox.png",
    "url": "https://wowtbc.net/sprunkin/parodybox/index.html",
    "description": "Home Squidki Parodybox Squidki Parodybox 583 votes The Squidki ParodyBox Mod brings a lighthearte...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Padek Man Phase 2 Aftermath",
    "icon": "/images/new_mods/Sprunki Padek Man Phase 2 Aftermath.png",
    "url": "https://wowtbc.net/sprunkin/padekman-phase2-aftermath/index.html",
    "description": "Home Squidki Padek Man Phase 2 Aftermath Squidki Padek Man Phase 2 Aftermath 583 votes The Sprunk...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Colors Phase 12",
    "icon": "/images/new_mods/Sprunki Colors Phase 12.png",
    "url": "https://wowtbc.net/sprunkin/colors-phase-12/index.html",
    "description": "Home Squidki Colors Phase 12 Squidki Colors Phase 12 583 votes The Squidki Colors Phase 12 Mod is...",
    "type": "New Mods"
  },
  {
    "name": "Sprunbox Qoobies",
    "icon": "/images/new_mods/Sprunbox Qoobies.png",
    "url": "https://wowtbc.net/sprunkin/sprunbox/index.html",
    "description": "Home Sprunbox Qoobies Sprunbox Qoobies 583 votes The Sprunbox Qoobies Mod introduces a refreshing...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 6 Original",
    "icon": "/images/new_mods/Sprunki Phase 6 Original.png",
    "url": "https://wowtbc.net/sprunkin/phase6-original/index.html",
    "description": "Home Squidki Phase 6 Original Squidki Phase 6 Original 583 votes The Squidki Phase 6 Original Mod...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Dandilarity",
    "icon": "/images/new_mods/Sprunki Dandilarity.png",
    "url": "https://wowtbc.net/sprunkin/dandilarity/index.html",
    "description": "Home Squidki Dandilarity Squidki Dandilarity 583 votes The Squidki Dandilarity Mod is a creative ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Definitive Phase 4 Saved Archive",
    "icon": "/images/new_mods/Sprunki Definitive Phase 4 Saved Archive.png",
    "url": "https://wowtbc.net/sprunkin/definitive-phase4-saved-archive/index.html",
    "description": "Home Squidki Definitive Phase 4 Saved Archive Squidki Definitive Phase 4 Saved Archive 583 votes ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Broke Phase 3",
    "icon": "/images/new_mods/Sprunki Broke Phase 3.png",
    "url": "https://wowtbc.net/sprunkin/broke-phase3/index.html",
    "description": "Home Squidki Broke Phase 3 Squidki Broke Phase 3 583 votes The Squidki Broke Phase 3 Mod brings a...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Spruced",
    "icon": "/images/new_mods/Sprunki But Spruced.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-spruced/index.html",
    "description": "Home Squidki But Spruced Squidki But Spruced 583 votes The Squidki but Spruced Mod reimagines the...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Ploinkers",
    "icon": "/images/new_mods/Sprunki Ploinkers.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-ploinkers/index.html",
    "description": "Home Squidki Ploinkers Squidki Ploinkers 583 votes The Squidki Ploinkers Mod adds a playful and q...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 30 Death",
    "icon": "/images/new_mods/Sprunki Phase 30 Death.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase30-death/index.html",
    "description": "Home Squidki Phase 30 Death Squidki Phase 30 Death 583 votes The Squidki Phase 30 Death Mod is a ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3 Remaster But More Squidkified",
    "icon": "/images/new_mods/Sprunki Phase 3 Remaster But More Squidkified.png",
    "url": "https://wowtbc.net/sprunkin/phase3-remaster-Squidkified/index.html",
    "description": "Home Squidki Phase 3 Remaster But More Squidkified Squidki Phase 3 Remaster But More Squidkified ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked 2 Remake",
    "icon": "/images/new_mods/Sprunked 2 Remake.png",
    "url": "https://wowtbc.net/sprunkin/sprunked2-remake/index.html",
    "description": "Home Sprunked 2 Remake Sprunked 2 Remake 583 votes The Sprunked 2 Remake Mod is a polished and en...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Interactive Phase 3",
    "icon": "/images/new_mods/Sprunki Interactive Phase 3.png",
    "url": "https://wowtbc.net/sprunkin/interactive-phase3/index.html",
    "description": "Home Squidki Interactive Phase 3 Squidki Interactive Phase 3 583 votes The Squidki Interactive Ph...",
    "type": "New Mods"
  },
  {
    "name": "Squidkiledify",
    "icon": "/images/new_mods/Squidkiledify.png",
    "url": "https://wowtbc.net/sprunkin/Squidkiledify/index.html",
    "description": "Home Squidkiledify Squidkiledify 583 votes The Squidkiledify Mod offers a fresh and dynamic twist...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 888 Death",
    "icon": "/images/new_mods/Sprunki Phase 888 Death.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase888-death/index.html",
    "description": "Home Squidki Phase 888 Death Squidki Phase 888 Death 583 votes The Squidki Phase 888 Death Mod st...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3.5",
    "icon": "/images/new_mods/Sprunki Phase 3.5.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase3.5/index.html",
    "description": "Home Squidki Phase 3.5 Squidki Phase 3.5 583 votes The Squidki Phase 3.5 Mod serves as a creative...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 4.5",
    "icon": "/images/new_mods/Sprunki Phase 4.5.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase4.5/index.html",
    "description": "Home Squidki Phase 4.5 Squidki Phase 4.5 583 votes The Squidki Phase 4.5 Mod bridges the gap betw...",
    "type": "New Mods"
  },
  {
    "name": "Squidki IP Leaked",
    "icon": "/images/new_mods/Sprunki IP Leaked.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-ip-leaked/index.html",
    "description": "Home Squidki IP Leaked Squidki IP Leaked 583 votes The Squidki IP Leaked Mod offers an intriguing...",
    "type": "New Mods"
  },
  {
    "name": "Left Un Squidki",
    "icon": "/images/new_mods/Left Un Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-left-un/index.html",
    "description": "Home Left Un Squidki Left Un Squidki 583 votes The Left Un Squidki Mod introduces a haunting and ...",
    "type": "New Mods"
  },
  {
    "name": "ParaSquidki Phase 3",
    "icon": "/images/new_mods/ParaSquidki Phase 3.png",
    "url": "https://wowtbc.net/sprunkin/paraSquidki-phase3/index.html",
    "description": "Home ParaSquidki Phase 3 ParaSquidki Phase 3 583 votes The ParaSquidki Phase 3 Mod takes the thri...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Chaotic Good",
    "icon": "/images/new_mods/Sprunki Chaotic Good.png",
    "url": "https://wowtbc.net/sprunkin/chaotic-retake/index.html",
    "description": "Home Squidki Chaotic Good Squidki Chaotic Good 583 votes The Squidki Chaotic Good Mod brings a li...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Schec",
    "icon": "/images/new_mods/Sprunked Schec.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-schec/index.html",
    "description": "Home Sprunked Schec Sprunked Schec 583 votes The Sprunked Schec Mod offers a unique and inventive...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 5 Fanmade",
    "icon": "/images/new_mods/Sprunki Phase 5 Fanmade.png",
    "url": "https://wowtbc.net/sprunkin/phase5-fanmade/index.html",
    "description": "Home Squidki Phase 5 Fanmade Squidki Phase 5 Fanmade 583 votes The Squidki Phase 5 Fanmade Mod is...",
    "type": "New Mods"
  },
  {
    "name": "Squidki in Ohio (Brainrot)",
    "icon": "/images/new_mods/Sprunki in Ohio (Brainrot).png",
    "url": "https://wowtbc.net/sprunkin/Squidki-brainroot/index.html",
    "description": "Home Squidki in Ohio (Brainrot) Squidki in Ohio (Brainrot) 583 votes The Squidki in Ohio (Brainro...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Terror Phase 30",
    "icon": "/images/new_mods/Sprunki Terror Phase 30.png",
    "url": "https://wowtbc.net/sprunkin/terror-phase30/index.html",
    "description": "Home Squidki Terror Phase 30 Squidki Terror Phase 30 583 votes Squidki Terror Phase 30 Mod takes ...",
    "type": "New Mods"
  },
  {
    "name": "Sprinkle Parasite",
    "icon": "/images/new_mods/Sprinkle Parasite.png",
    "url": "https://wowtbc.net/sprunkin/sprinkle-parasite/index.html",
    "description": "Home Sprinkle Parasite Sprinkle Parasite 583 votes The Sprinkle Parasite Mod is a dark and thrill...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Terror Phase 10",
    "icon": "/images/new_mods/Sprunki Terror Phase 10.png",
    "url": "https://wowtbc.net/sprunkin/terrror-phase10/index.html",
    "description": "Home Squidki Terror Phase 10 Squidki Terror Phase 10 583 votes Squidki Terror Phase 10 Mod is a t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Mayonaise 2",
    "icon": "/images/new_mods/Sprunki Mayonaise 2.png",
    "url": "https://wowtbc.net/sprunkin/mayonaise2/index.html",
    "description": "Home Squidki Mayonaise 2 Squidki Mayonaise 2 583 votes Squidki Mayonnaise 2 Mod is a delightful c...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But 15,000,000 FunBots",
    "icon": "/images/new_mods/Sprunki But 15,000,000 FunBots.png",
    "url": "https://wowtbc.net/sprunkin/funbot150k/index.html",
    "description": "Home Squidki But 15,000,000 FunBots Squidki But 15,000,000 FunBots 583 votes Squidki But 15,000,0...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Titanic Cat Gang Edition",
    "icon": "/images/new_mods/Sprunki Titanic Cat Gang Edition.png",
    "url": "https://wowtbc.net/sprunkin/titanic-cat1/index.html",
    "description": "Home Squidki Titanic Cat Gang Edition Squidki Titanic Cat Gang Edition 583 votes Squidki Titanic ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Relish",
    "icon": "/images/new_mods/Sprunki But Relish.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-relish/index.html",
    "description": "Home Squidki But Relish Squidki But Relish 583 votes Squidki But Relish Mod adds a quirky and fla...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Definitive Phase 5",
    "icon": "/images/new_mods/Sprunki Definitive Phase 5.png",
    "url": "https://wowtbc.net/sprunkin/definitive-phase5/index.html",
    "description": "Home Squidki Definitive Phase 5 Squidki Definitive Phase 5 583 votes Squidki Definitive Phase 5 M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Cute Time",
    "icon": "/images/new_mods/Sprunki Cute Time.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-cutetime/index.html",
    "description": "Home Squidki Cute Time Squidki Cute Time 583 votes Squidki Cute Time Mod introduces a heartwarmin...",
    "type": "New Mods"
  },
  {
    "name": "Squidki the Sun",
    "icon": "/images/new_mods/Sprunki the Sun.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-thesun/index.html",
    "description": "Home Squidki the Sun Squidki the Sun 583 votes Squidki: The Sun Mod brings a radiant twist to the...",
    "type": "New Mods"
  },
  {
    "name": "Kino Sprunked 2.0: Mini Remake",
    "icon": "/images/new_mods/Kino Sprunked 2.0- Mini Remake.png",
    "url": "https://wowtbc.net/sprunkin/kino-sprunked2-mini/index.html",
    "description": "Home Kino Sprunked 2.0: Mini Remake Kino Sprunked 2.0: Mini Remake 583 votes Kino Sprunked 2.0 Mi...",
    "type": "New Mods"
  },
  {
    "name": "FiddleSquidkis",
    "icon": "/images/new_mods/FiddleSquidkis.png",
    "url": "https://wowtbc.net/sprunkin/fiddleSquidkis/index.html",
    "description": "Home FiddleSquidkis FiddleSquidkis 583 votes FiddleSquidkis Mod takes inspiration from the popula...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3 Reverse",
    "icon": "/images/new_mods/Sprunki Phase 3 Reverse.png",
    "url": "https://wowtbc.net/sprunkin/phase3-reverse/index.html",
    "description": "Home Squidki Phase 3 Reverse Squidki Phase 3 Reverse 583 votes Squidki Phase 3 Reverse Mod flips ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Terror Phase 20",
    "icon": "/images/new_mods/Sprunki Terror Phase 20.png",
    "url": "https://wowtbc.net/sprunkin/terror-phase20/index.html",
    "description": "Home Squidki Terror Phase 20 Squidki Terror Phase 20 583 votes Squidki Terror Phase 20 Mod is a c...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Poppy Playtime",
    "icon": "/images/new_mods/Squidki- Poppy Playtime.png",
    "url": "https://wowtbc.net/sprunkin/poppy-playtime/index.html",
    "description": "Home Squidki: Poppy Playtime Squidki: Poppy Playtime 583 votes The Incredibox Squidki Poppy Playt...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Retake: Final Update",
    "icon": "/images/new_mods/Sprunked Retake- Final Update.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-retake-final/index.html",
    "description": "Home Sprunked Retake: Final Update Sprunked Retake: Final Update 583 votes Sprunked Retake: Final...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkstard Cancelled Update",
    "icon": "/images/new_mods/Sprunkstard Cancelled Update.png",
    "url": "https://wowtbc.net/sprunkin/sprunkstard-cancelled/index.html",
    "description": "Home Sprunkstard Cancelled Update Sprunkstard Cancelled Update 583 votes Sprunkstard Cancelled Up...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Infected 2",
    "icon": "/images/new_mods/Sprunki Infected 2.png",
    "url": "https://wowtbc.net/sprunkin/infected2/index.html",
    "description": "Home Squidki Infected 2 Squidki Infected 2 583 votes Squidki Infected 2 Mod is the highly anticip...",
    "type": "New Mods"
  },
  {
    "name": "SquidkiVerse: The Lord Update",
    "icon": "/images/new_mods/SquidkiVerse- The Lord Update.png",
    "url": "https://wowtbc.net/sprunkin/sprunkverse-lord/index.html",
    "description": "Home SquidkiVerse: The Lord Update SquidkiVerse: The Lord Update 583 votes SquidkiVerse: The Lord...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 10 Remade",
    "icon": "/images/new_mods/Sprunki Phase 10 Remade.png",
    "url": "https://wowtbc.net/sprunkin/phase10-remade/index.html",
    "description": "Home Squidki Phase 10 Remade Squidki Phase 10 Remade 583 votes Squidki VSprunkela Mod is a captiv...",
    "type": "New Mods"
  },
  {
    "name": "Squidki VSprunkela",
    "icon": "/images/new_mods/Sprunki VSprunkela.png",
    "url": "https://wowtbc.net/sprunkin/vsprunkela/index.html",
    "description": "Home Squidki VSprunkela Squidki VSprunkela 583 votes Squidki VSprunkela Mod is a captivating crea...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkr But All Alive",
    "icon": "/images/new_mods/Sprunkr But All Alive.png",
    "url": "https://wowtbc.net/sprunkin/sprunkr-all-alive/index.html",
    "description": "Home Sprunkr But All Alive Sprunkr But All Alive 583 votes Sprunkr But All Alive Mod introduces a...",
    "type": "New Mods"
  },
  {
    "name": "Paranormal Squidki",
    "icon": "/images/new_mods/Paranormal Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/paranormal/index.html",
    "description": "Home Paranormal Squidki Paranormal Squidki 583 votes Paranormal Squidki Mod takes players into a ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake But All Alive",
    "icon": "/images/new_mods/Sprunki Retake But All Alive.png",
    "url": "https://wowtbc.net/sprunkin/retake-all-alive/index.html",
    "description": "Home Squidki Retake But All Alive Squidki Retake But All Alive 583 votes Squidki Retake But All A...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Babies With OC's",
    "icon": "/images/new_mods/Sprunki Babies With OC's.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-babies-ocs/index.html",
    "description": "Home Squidki Babies With OC's Squidki Babies With OC's 583 votes Squidki Babies With OC's Mod is ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Reboot Phase 4 But All Alive",
    "icon": "/images/new_mods/Sprunki Reboot Phase 4 But All Alive.png",
    "url": "https://wowtbc.net/sprunkin/reboot-phase4-all-alive/index.html",
    "description": "Home Squidki Reboot Phase 4 But All Alive Squidki Reboot Phase 4 But All Alive 583 votes Squidki ...",
    "type": "New Mods"
  },
  {
    "name": "Kino Sprunked BE Edition",
    "icon": "/images/new_mods/Kino Sprunked BE Edition.png",
    "url": "https://wowtbc.net/sprunkin/kino-sprunked-be/index.html",
    "description": "Home Kino Sprunked BE Edition Kino Sprunked BE Edition 583 votes Kino Sprunked Be Edition Mod is ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Reboot Phase 5 But All Alive",
    "icon": "/images/new_mods/Sprunki Reboot Phase 5 But All Alive.png",
    "url": "https://wowtbc.net/sprunkin/reboot-phase5-all-alive/index.html",
    "description": "Home Squidki Reboot Phase 5 But All Alive Squidki Reboot Phase 5 But All Alive 583 votes Squidki ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkr BE Edition",
    "icon": "/images/new_mods/Sprunkr BE Edition.png",
    "url": "https://wowtbc.net/sprunkin/sprunkr-be/index.html",
    "description": "Home Sprunkr BE Edition Sprunkr BE Edition 583 votes Sprunkr Be Edition Mod is a fresh take on th...",
    "type": "New Mods"
  },
  {
    "name": "ParaSquidki 14.0",
    "icon": "/images/new_mods/ParaSquidki 14.0.png",
    "url": "https://wowtbc.net/sprunkin/paraSquidki14/index.html",
    "description": "Home ParaSquidki 14.0 ParaSquidki 14.0 583 votes ParaSquidki 14 Mod is the latest addition to the...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyraminx 7 Slots",
    "icon": "/images/new_mods/Sprunki Pyraminx 7 Slots.png",
    "url": "https://wowtbc.net/sprunkin/pyraminx-7slots/index.html",
    "description": "Home Squidki Pyraminx 7 Slots Squidki Pyraminx 7 Slots 583 votes Squidki Pyraminx 7 Slots Mod is ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Scrunkly",
    "icon": "/images/new_mods/Sprunki Scrunkly.png",
    "url": "https://wowtbc.net/sprunkin/scrunkly/index.html",
    "description": "Home Squidki Scrunkly Squidki Scrunkly 583 votes Squidki Scrunkly Mod is a playful and whimsical ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Black Replace with Sakta",
    "icon": "/images/new_mods/Sprunki But Black Replace with Sakta.png",
    "url": "https://wowtbc.net/sprunkin/black-replace-sakta/index.html",
    "description": "Home Squidki But Black Replace with Sakta Squidki But Black Replace with Sakta 583 votes Squidki ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 5: Canon Edition",
    "icon": "/images/new_mods/Sprunki Phase 5- Canon Edition.png",
    "url": "https://wowtbc.net/sprunkin/phase5-canon-edition/index.html",
    "description": "Home Squidki Phase 5: Canon Edition Squidki Phase 5: Canon Edition 583 votes Squidki Phase 5 Cano...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3: Canon Edition",
    "icon": "/images/new_mods/Sprunki Phase 3- Canon Edition.png",
    "url": "https://wowtbc.net/sprunkin/phase3-canon-edition/index.html",
    "description": "Home Squidki Phase 3: Canon Edition Squidki Phase 3: Canon Edition 583 votes Squidki Phase 3 Cano...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But SchoolHouse Trouble",
    "icon": "/images/new_mods/Sprunki But SchoolHouse Trouble.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-schoolhouse-trouble/index.html",
    "description": "Home Squidki But SchoolHouse Trouble Squidki But SchoolHouse Trouble 583 votes Squidki But School...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Jingle",
    "icon": "/images/new_mods/Sprunki Jingle.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-jingle/index.html",
    "description": "Home Squidki Jingle Squidki Jingle 583 votes Squidki Jingle Mod is a festive and lively mod inspi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Vintage Times",
    "icon": "/images/new_mods/Sprunki Vintage Times.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-vintage/index.html",
    "description": "Home Squidki Vintage Times Squidki Vintage Times 583 votes Squidki Vintage Times Mod takes player...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But All Kids",
    "icon": "/images/new_mods/Sprunki But All Kids.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-all-kids/index.html",
    "description": "Home Squidki But All Kids Squidki But All Kids 583 votes Squidki But All Kids Mod transforms the ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Remastered Again",
    "icon": "/images/new_mods/Sprunki But Remastered Again.png",
    "url": "https://wowtbc.net/sprunkin/remastered-again/index.html",
    "description": "Home Squidki But Remastered Again Squidki But Remastered Again 583 votes Squidki But Remastered A...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkborn Alive in Pain",
    "icon": "/images/new_mods/Sprunkborn Alive in Pain.png",
    "url": "https://wowtbc.net/sprunkin/sprunkborn-alive/index.html",
    "description": "Home Sprunkborn Alive in Pain Sprunkborn Alive in Pain 583 votes Sprunkborn Alive in Pain Mod is ...",
    "type": "New Mods"
  },
  {
    "name": "Sprinkle Phase 3",
    "icon": "/images/new_mods/Sprinkle Phase 3.png",
    "url": "https://wowtbc.net/sprunkin/sprinkle-phase3/index.html",
    "description": "Home Sprinkle Phase 3 Sprinkle Phase 3 583 votes Sprinkle Phase 3 Mod is the next thrilling chapt...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkr Phase 4",
    "icon": "/images/new_mods/Sprunkr Phase 4.png",
    "url": "https://wowtbc.net/sprunkin/sprunkr-phase4/index.html",
    "description": "Home Sprunkr Phase 4 Sprunkr Phase 4 583 votes Sprunkr Phase 4 Mod takes the Sprunkr series to th...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkly Remastered",
    "icon": "/images/new_mods/Sprunkly Remastered.png",
    "url": "https://wowtbc.net/sprunkin/sprunkly-remastered/index.html",
    "description": "Home Sprunkly Remastered Sprunkly Remastered 583 votes Sprunkly Remastered Mod is a fan-made reim...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkr Phase 3",
    "icon": "/images/new_mods/Sprunkr Phase 3.png",
    "url": "https://wowtbc.net/sprunkin/sprunkr-phase3/index.html",
    "description": "Home Sprunkr Phase 3 Sprunkr Phase 3 583 votes Sprunkr Phase 3 Mod is an exciting fan-made modifi...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkstard Sprinkle",
    "icon": "/images/new_mods/Sprunkstard Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/sprunkstard-sprinkle/index.html",
    "description": "Home Sprunkstard Sprinkle Sprunkstard Sprinkle 583 votes Sprunkstard Sprinkle Mod is an exciting ...",
    "type": "New Mods"
  },
  {
    "name": "Sprinkle Reskinned",
    "icon": "/images/new_mods/Sprinkle Reskinned.png",
    "url": "https://wowtbc.net/sprunkin/sprinkle-reskinned/index.html",
    "description": "Home Sprinkle Reskinned Sprinkle Reskinned 583 votes Sprinkle Reskinned Mod is a visually excitin...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkr Is Alive Not Dead",
    "icon": "/images/new_mods/Sprunkr Is Alive Not Dead.png",
    "url": "https://wowtbc.net/sprunkin/sprunkr-alive-not-dead/index.html",
    "description": "Home Sprunkr Is Alive Not Dead Sprunkr Is Alive Not Dead 583 votes Sprunkr is Alive Not Dead Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Splunkeh",
    "icon": "/images/new_mods/Sprunki Splunkeh.png",
    "url": "https://wowtbc.net/sprunkin/splunkeh/index.html",
    "description": "Home Squidki Splunkeh Squidki Splunkeh 583 votes Squidki Splunkeh Mod is a quirky and creative fa...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Murder Mansion",
    "icon": "/images/new_mods/Sprunki Murder Mansion.png",
    "url": "https://wowtbc.net/sprunkin/murder-mansion/index.html",
    "description": "Home Squidki Murder Mansion Squidki Murder Mansion 583 votes Squidki Murder Mansion Mod is a thri...",
    "type": "New Mods"
  },
  {
    "name": "Cold As Ice But Squidki 3",
    "icon": "/images/new_mods/Cold As Ice But Squidki 3.png",
    "url": "https://wowtbc.net/sprunkin/cool-ice-Squidki3/index.html",
    "description": "Home Cold As Ice But Squidki 3 Cold As Ice But Squidki 3 583 votes Cold As Ice But Squidki 3 Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Cold As Frost But Squidki",
    "icon": "/images/new_mods/Cold As Frost But Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/cold-frost-Squidki/index.html",
    "description": "Home Cold As Frost But Squidki Cold As Frost But Squidki 583 votes Cold As Frost But Squidki Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Lips",
    "icon": "/images/new_mods/Sprunki But Lips.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-lips/index.html",
    "description": "Home Squidki But Lips Squidki But Lips 583 votes Squidki But Lips Mod adds a playful and quirky t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Reskinned 2",
    "icon": "/images/new_mods/Sprunki Reskinned 2.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-reskinned2/index.html",
    "description": "Home Squidki Reskinned 2 Squidki Reskinned 2 583 votes Squidki Reskinned 2 Mod takes the familiar...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Don't Hug Me",
    "icon": "/images/new_mods/Sprunki Don't Hug Me.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-dont-hug/index.html",
    "description": "Home Squidki Don't Hug Me Squidki Don't Hug Me 583 votes Squidki Don't Hug Me Mod brings a surrea...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retakolality",
    "icon": "/images/new_mods/Sprunki Retakolality.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retakolality/index.html",
    "description": "Home Squidki Retakolality Squidki Retakolality 583 votes Squidki Retakolality Mod is a thrilling ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pokemon 2",
    "icon": "/images/new_mods/Sprunki Pokemon 2.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-pokemon2/index.html",
    "description": "Home Squidki Pokemon 2 Squidki Pokemon 2 583 votes Squidki Pokemon 2 Mod is the full-release vers...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Hot As Lava",
    "icon": "/images/new_mods/Sprunki Hot As Lava.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-hot-lava/index.html",
    "description": "Home Squidki Hot As Lava Squidki Hot As Lava 583 votes Squidki Hot as Lava Mod brings a fiery twi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Unfairness",
    "icon": "/images/new_mods/Sprunki Unfairness.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-unfairness/index.html",
    "description": "Home Squidki Unfairness Squidki Unfairness 583 votes Squidki Unfairness Mod introduces a challeng...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed [Fan-Made]",
    "icon": "/images/new_mods/Sprunki Pyramixed [Fan-Made].png",
    "url": "https://wowtbc.net/sprunkin/Squidki-pyramixed-scratch/index.html",
    "description": "Home Squidki Pyramixed [Fan-Made] Squidki Pyramixed [Fan-Made] 583 votes Squidki Pyramixed [Fan-M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Mascot Mayhem Repaint",
    "icon": "/images/new_mods/Sprunki Mascot Mayhem Repaint.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-mascot/index.html",
    "description": "Home Squidki Mascot Mayhem Repaint Squidki Mascot Mayhem Repaint 583 votes Squidki Mascot Mayhem ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Reboot 2",
    "icon": "/images/new_mods/Sprunki Reboot 2.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-reboot2/index.html",
    "description": "Home Squidki Reboot 2 Squidki Reboot 2 583 votes Squidki Reboot 2 Mod is a refreshed and enhanced...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Untitled Music Game",
    "icon": "/images/new_mods/Sprunki Untitled Music Game.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-untitled-music/index.html",
    "description": "Home Squidki Untitled Music Game Squidki Untitled Music Game 583 votes Squidki Untitled Music Gam...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Mighti But Human",
    "icon": "/images/new_mods/Sprunki Mighti But Human.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-mighti-human/index.html",
    "description": "Home Squidki Mighti But Human Squidki Mighti But Human 583 votes Squidki Mighti But Human Mod off...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Kill Edition: Simon Kill Tunner",
    "icon": "/images/new_mods/Sprunki Kill Edition- Simon Kill Tunner.png",
    "url": "https://wowtbc.net/sprunkin/kill-edition/index.html",
    "description": "Home Squidki Kill Edition: Simon Kill Tunner Squidki Kill Edition: Simon Kill Tunner 583 votes Sp...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake 2.5 Ocs",
    "icon": "/images/new_mods/Sprunki Retake 2.5 Ocs.png",
    "url": "https://wowtbc.net/sprunkin/retake-2.5-oc/index.html",
    "description": "Home Squidki Retake 2.5 Ocs Squidki Retake 2.5 Ocs 583 votes Squidki Retake 2.5 OCs Mod is an exc...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pyramixed",
    "icon": "/images/new_mods/Sprunki Pyramixed.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-pyramixed/index.html",
    "description": "Home Squidki Pyramixed Squidki Pyramixed 583 votes Squidki Pyramixed Mod introduces a unique and ...",
    "type": "New Mods"
  },
  {
    "name": "Kino Sprunked Ocs",
    "icon": "/images/new_mods/Kino Sprunked Ocs.png",
    "url": "https://wowtbc.net/sprunkin/kino-sprunked-oc/index.html",
    "description": "Home Kino Sprunked Ocs Kino Sprunked Ocs 583 votes Kino Sprunked OCs Mod introduces a fresh lineu...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Kiss Edition: New Animation",
    "icon": "/images/new_mods/Sprunki Kiss Edition- New Animation.png",
    "url": "https://wowtbc.net/sprunkin/kiss-edition-new-animation/index.html",
    "description": "Home Squidki Kiss Edition: New Animation Squidki Kiss Edition: New Animation 583 votes Squidki Ki...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunkolality",
    "icon": "/images/new_mods/Sprunki Sprunkolality.png",
    "url": "https://wowtbc.net/sprunkin/sprunkolality/index.html",
    "description": "Home Squidki Sprunkolality Squidki Sprunkolality 583 votes Squidki Sprunkolality Mod is a chillin...",
    "type": "New Mods"
  },
  {
    "name": "Squidki TADC Remake",
    "icon": "/images/new_mods/Sprunki TADC Remake.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-tadc-remake/index.html",
    "description": "Home Squidki TADC Remake Squidki TADC Remake 583 votes Squidki TADC Remake Mod (also known as Spr...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkr But Squidki",
    "icon": "/images/new_mods/Sprunkr But Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/sprunkr-but-Squidki/index.html",
    "description": "Home Sprunkr But Squidki Sprunkr But Squidki 583 votes Sprunkr But Squidki Mod is a creative twis...",
    "type": "New Mods"
  },
  {
    "name": "Squidki x Alphabet Lore",
    "icon": "/images/new_mods/Sprunki x Alphabet Lore.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-alphabet-lore/index.html",
    "description": "Home Squidki x Alphabet Lore Squidki x Alphabet Lore 583 votes Squidki x Alphabet Lore Mod combin...",
    "type": "New Mods"
  },
  {
    "name": "Sprinkle Phase 4",
    "icon": "/images/new_mods/Sprinkle Phase 4.png",
    "url": "https://wowtbc.net/sprunkin/sprinkle-phase4/index.html",
    "description": "Home Sprinkle Phase 4 Sprinkle Phase 4 583 votes Sprinkle Phase 4 Mod takes the beloved Sprinkle ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Stranger",
    "icon": "/images/new_mods/Sprunki Stranger.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-stranger/index.html",
    "description": "Home Squidki Stranger Squidki Stranger 583 votes Squidki Stranger Mod brings an intriguing and my...",
    "type": "New Mods"
  },
  {
    "name": "Squidki SprunkAYKI",
    "icon": "/images/new_mods/Sprunki SprunkAYKI.png",
    "url": "https://wowtbc.net/sprunkin/sprunkayki1/index.html",
    "description": "Home Squidki SprunkAYKI Squidki SprunkAYKI 583 votes Squidki SprunkAYKI is a vibrant and playful ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Final Version",
    "icon": "/images/new_mods/Sprunked Final Version.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-final/index.html",
    "description": "Home Sprunked Final Version Sprunked Final Version 583 votes Sprunked Final Update Mod marks the ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Maze",
    "icon": "/images/new_mods/Sprunki Maze.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-maze/index.html",
    "description": "Home Squidki Maze Squidki Maze 583 votes Squidki Maze Game is an engaging puzzle adventure where ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki 2 Archive",
    "icon": "/images/new_mods/Sprunki 2 Archive.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-2-archive/index.html",
    "description": "Home Squidki 2 Archive Squidki 2 Archive 583 votes Squidki 2 Archive Mod is a nostalgic yet innov...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Punch Edition: Simon Punch Tunner",
    "icon": "/images/new_mods/Sprunki Punch Edition- Simon Punch Tunner.png",
    "url": "https://wowtbc.net/sprunkin/punch-edition-simon-tunner/index.html",
    "description": "Home Squidki Punch Edition: Simon Punch Tunner Squidki Punch Edition: Simon Punch Tunner 583 vote...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spurkney",
    "icon": "/images/new_mods/Sprunki Spurkney.png",
    "url": "https://wowtbc.net/sprunkin/spurkney/index.html",
    "description": "Home Squidki Spurkney Squidki Spurkney 583 votes Squidki Spurkney Mod introduces a quirky and hum...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Banban",
    "icon": "/images/new_mods/Sprunki Banban.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-banban/index.html",
    "description": "Home Squidki Banban Squidki Banban 583 votes Squidki Banban Mod brings a playful and colorful twi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Infected 2",
    "icon": "/images/new_mods/Sprunki Infected 2.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-infected2/index.html",
    "description": "Home Squidki Infected 2 Squidki Infected 2 583 votes Squidki Infected 2 Mod is a chilling sequel ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Galaxy",
    "icon": "/images/new_mods/Sprunki Galaxy.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-galaxy/index.html",
    "description": "Home Squidki Galaxy Squidki Galaxy 583 votes Squidki Galaxy Mod takes players on an interstellar ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked But OC's",
    "icon": "/images/new_mods/Sprunked But OC's.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-oc/index.html",
    "description": "Home Sprunked But OC's Sprunked But OC's 583 votes Sprunked But OC's Mod brings a creative twist ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunkup",
    "icon": "/images/new_mods/Sprunki Sprunkup.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sprunkup/index.html",
    "description": "Home Squidki Sprunkup Squidki Sprunkup 583 votes Squidki Sprunkup Game Mod takes the classic Spru...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Orin Ayo 2",
    "icon": "/images/new_mods/Sprunki Orin Ayo 2.png",
    "url": "https://wowtbc.net/sprunkin/orin-ayo-2/index.html",
    "description": "Home Squidki Orin Ayo 2 Squidki Orin Ayo 2 583 votes Squidki Orin Ayo 2 Mod is a dynamic sequel t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Mini Remake",
    "icon": "/images/new_mods/Sprunki Mini Remake.png",
    "url": "https://wowtbc.net/sprunkin/mini-remake1/index.html",
    "description": "Home Squidki Mini Remake Squidki Mini Remake 583 votes Squidki Mini Remake Mod is a delightful an...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Infected Z",
    "icon": "/images/new_mods/Sprunki Infected Z.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-infectedz/index.html",
    "description": "Home Squidki Infected Z Squidki Infected Z 583 votes Squidki Infected Z Mod plunges players into ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Cave Retake",
    "icon": "/images/new_mods/Sprunki Cave Retake.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-cave-retake/index.html",
    "description": "Home Squidki Cave Retake Squidki Cave Retake 583 votes Squidki Cave Retake Mod is a reimagined an...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Cave",
    "icon": "/images/new_mods/Sprunki Cave.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-cave/index.html",
    "description": "Home Squidki Cave Squidki Cave 583 votes Squidki Cave Mod takes players deep into an atmospheric ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spraklee",
    "icon": "/images/new_mods/Sprunki Spraklee.png",
    "url": "https://wowtbc.net/sprunkin/spraklee/index.html",
    "description": "Home Squidki Spraklee Squidki Spraklee 583 votes Squidki Spraklee Mod is a delightful and playful...",
    "type": "New Mods"
  },
  {
    "name": "Sprankler Phase 3",
    "icon": "/images/new_mods/Sprankler Phase 3.png",
    "url": "https://wowtbc.net/sprunkin/sprankler-phase3/index.html",
    "description": "Home Sprankler Phase 3 Sprankler Phase 3 583 votes Squidki Sprankler Phase 3 Mod continues the vi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprankler",
    "icon": "/images/new_mods/Sprunki Sprankler.png",
    "url": "https://wowtbc.net/sprunkin/sprankler/index.html",
    "description": "Home Squidki Sprankler Squidki Sprankler 583 votes Squidki Sprankler Mod is a lively and colorful...",
    "type": "New Mods"
  },
  {
    "name": "Squidki CountryBox Dark Phase",
    "icon": "/images/new_mods/Sprunki CountryBox Dark Phase.png",
    "url": "https://wowtbc.net/sprunkin/countrybox-dark-phase/index.html",
    "description": "Home Squidki CountryBox Dark Phase Squidki CountryBox Dark Phase 583 votes Squidki CountryBox Dar...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Geepers",
    "icon": "/images/new_mods/Sprunki Geepers.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-geepers/index.html",
    "description": "Home Squidki Geepers Squidki Geepers 583 votes Squidki Geepers Mod introduces a quirky and humoro...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Virus",
    "icon": "/images/new_mods/Sprunki Virus.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-virus/index.html",
    "description": "Home Squidki Virus Squidki Virus 583 votes Squidki Virus Mod introduces a thrilling and suspensef...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Their Feelings",
    "icon": "/images/new_mods/Sprunki Their Feelings.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-their-feeling/index.html",
    "description": "Home Squidki Their Feelings Squidki Their Feelings 583 votes Squidki Their Feelings Mod dives int...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake Hd Edition",
    "icon": "/images/new_mods/Sprunki Retake Hd Edition.png",
    "url": "https://wowtbc.net/sprunkin/retake-hd/index.html",
    "description": "Home Squidki Retake Hd Edition Squidki Retake Hd Edition 583 votes Squidki Retake HD Edition Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Singments 2.0",
    "icon": "/images/new_mods/Sprunki Singments 2.0.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-singment2/index.html",
    "description": "Home Squidki Singments 2.0 Squidki Singments 2.0 583 votes Squidki Singments 2.0 Mod is a revampe...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Dandy's World 2.0",
    "icon": "/images/new_mods/Sprunki Retake- Dandy's World 2.0.png",
    "url": "https://wowtbc.net/sprunkin/retake-dandy-world2/index.html",
    "description": "Home Squidki Retake: Dandy's World 2.0 Squidki Retake: Dandy's World 2.0 583 votes Squidki Retake...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Don't Singing Mouth",
    "icon": "/images/new_mods/Sprunki But Don't Singing Mouth.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-not-singing-mouth/index.html",
    "description": "Home Squidki But Don't Singing Mouth Squidki But Don't Singing Mouth 583 votes Squidki But Don't ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake Slow Version",
    "icon": "/images/new_mods/Sprunki Retake Slow Version.png",
    "url": "https://wowtbc.net/sprunkin/retake-slow/index.html",
    "description": "Home Squidki Retake Slow Version Squidki Retake Slow Version 583 votes Squidki Retake Slow Versio...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake Neo Version",
    "icon": "/images/new_mods/Sprunki Retake Neo Version.png",
    "url": "https://wowtbc.net/sprunkin/retake-neo/index.html",
    "description": "Home Squidki Retake Neo Version Squidki Retake Neo Version 583 votes Squidki Retake Neo Version M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 70",
    "icon": "/images/new_mods/Sprunki Phase 70.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase70/index.html",
    "description": "Home Squidki Phase 70 Squidki Phase 70 583 votes Squidki Phase 70 Mod is a groundbreaking additio...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Definitive Phase 11",
    "icon": "/images/new_mods/Sprunki Definitive Phase 11.png",
    "url": "https://wowtbc.net/sprunkin/definitive-phase11/index.html",
    "description": "Home Squidki Definitive Phase 11 Squidki Definitive Phase 11 583 votes Squidki Definitive Phase 1...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake TCOM kwamis",
    "icon": "/images/new_mods/Sprunki Retake TCOM kwamis.png",
    "url": "https://wowtbc.net/sprunkin/retake-tcom/index.html",
    "description": "Home Squidki Retake TCOM kwamis Squidki Retake TCOM kwamis 583 votes Squidki Retake TCOM Kwamis M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But They Are Alive Remake",
    "icon": "/images/new_mods/Sprunki But They Are Alive Remake.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-alive-remake/index.html",
    "description": "Home Squidki But They Are Alive Remake Squidki But They Are Alive Remake 583 votes Squidki But Th...",
    "type": "New Mods"
  },
  {
    "name": "Squidki 2nd Edition",
    "icon": "/images/new_mods/Sprunki 2nd Edition.png",
    "url": "https://wowtbc.net/sprunkin/Squidki2nd/index.html",
    "description": "Home Squidki 2nd Edition Squidki 2nd Edition 583 votes Squidki 2nd Edition Mod takes the beloved ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked 2.0: RE-Sprunked",
    "icon": "/images/new_mods/Sprunked 2.0- RE-Sprunked.png",
    "url": "https://wowtbc.net/sprunkin/resprunked2/index.html",
    "description": "Home Sprunked 2.0: RE-Sprunked Sprunked 2.0: RE-Sprunked 583 votes Sprunked 2.0: RE-Sprunked Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidkilairity Remake v1",
    "icon": "/images/new_mods/Squidkilairity Remake v1.png",
    "url": "https://wowtbc.net/sprunkin/Squidkilairity-remakev1/index.html",
    "description": "Home Squidkilairity Remake v1 Squidkilairity Remake v1 583 votes Squidkilairity Remake v1 Mod is ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Definitive Phase 10",
    "icon": "/images/new_mods/Sprunki Definitive Phase 10.png",
    "url": "https://wowtbc.net/sprunkin/definitive-phase10/index.html",
    "description": "Home Squidki Definitive Phase 10 Squidki Definitive Phase 10 583 votes Squidki Definitive Phase 1...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake Spinki",
    "icon": "/images/new_mods/Sprunki Retake Spinki.png",
    "url": "https://wowtbc.net/sprunkin/retake-spinki/index.html",
    "description": "Home Squidki Retake Spinki Squidki Retake Spinki 583 votes Squidki Retake Spinki Mod is a creativ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Mighti",
    "icon": "/images/new_mods/Sprunki Mighti.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-mighti/index.html",
    "description": "Home Squidki Mighti Squidki Mighti 583 votes Squidki Mighti Mod introduces a bold and powerful tw...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkstard in Different Colors",
    "icon": "/images/new_mods/Sprunkstard in Different Colors.png",
    "url": "https://wowtbc.net/sprunkin/sprunkstard-different-color/index.html",
    "description": "Home Sprunkstard in Different Colors Sprunkstard in Different Colors 583 votes Sprunkstard in Dif...",
    "type": "New Mods"
  },
  {
    "name": "Squidki New HD Edition",
    "icon": "/images/new_mods/Sprunki New HD Edition.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-new-hd/index.html",
    "description": "Home Squidki New HD Edition Squidki New HD Edition 583 votes Squidki New HD Edition Mod is a visu...",
    "type": "New Mods"
  },
  {
    "name": "Yellow Colorbox But Squidki",
    "icon": "/images/new_mods/Yellow Colorbox But Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/yellow-colorbox/index.html",
    "description": "Home Yellow Colorbox But Squidki Yellow Colorbox But Squidki 583 votes Yellow Colorbox But Sprunk...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkr Restyle",
    "icon": "/images/new_mods/Sprunkr Restyle.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-restyle/index.html",
    "description": "Home Sprunkr Restyle Sprunkr Restyle 583 votes Sprunkr Restyle Mod is a visually revamped and cre...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Ketchup: Royal & Friends",
    "icon": "/images/new_mods/Sprunki Ketchup- Royal & Friends.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-ketchup-royal/index.html",
    "description": "Home Squidki Ketchup: Royal & Friends Squidki Ketchup: Royal & Friends 583 votes Squidki Ketchup:...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprank",
    "icon": "/images/new_mods/Sprunki Sprank.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sprank/index.html",
    "description": "Home Squidki Sprank Squidki Sprank 583 votes Squidki Sprank Mod brings a fresh and energetic twis...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunkli",
    "icon": "/images/new_mods/Sprunki Sprunkli.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sprunli/index.html",
    "description": "Home Squidki Sprunkli Squidki Sprunkli 583 votes Squidki Sprunkli Mod introduces a playful and wh...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Dandy's World 2.0",
    "icon": "/images/new_mods/Sprunki Dandy's World 2.0.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-dandy-world2/index.html",
    "description": "Home Squidki Dandy's World 2.0 Squidki Dandy's World 2.0 583 votes Squidki Dandy's World 2.0 OC M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Ruinit With Hands",
    "icon": "/images/new_mods/Sprunki But Ruinit With Hands.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-ruinit-with-hands/index.html",
    "description": "Home Squidki But Ruinit With Hands Squidki But Ruinit With Hands 583 votes Squidki But Ruinit Wit...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunji",
    "icon": "/images/new_mods/Sprunki Sprunji.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sprunji/index.html",
    "description": "Home Squidki Sprunji Squidki Sprunji 583 votes Squidki Sprunji Mod adds a playful and imaginative...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunkrz",
    "icon": "/images/new_mods/Sprunki Sprunkrz.png",
    "url": "https://wowtbc.net/sprunkin/sprunkrz1/index.html",
    "description": "Home Squidki Sprunkrz Squidki Sprunkrz 583 votes Squidki Sprunkrz Mod is an exciting addition to ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked But Normal 2.0",
    "icon": "/images/new_mods/Sprunked But Normal 2.0.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-normal2/index.html",
    "description": "Home Sprunked But Normal 2.0 Sprunked But Normal 2.0 583 votes Sprunked But Normal 2.0 Mod is a r...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunkr 2.0",
    "icon": "/images/new_mods/Sprunki Sprunkr 2.0.png",
    "url": "https://wowtbc.net/sprunkin/sprunkr2/index.html",
    "description": "Home Squidki Sprunkr 2.0 Squidki Sprunkr 2.0 583 votes Squidki Sprunkr 2.0 Mod is an upgraded and...",
    "type": "New Mods"
  },
  {
    "name": "Sprinkle Scratch Port",
    "icon": "/images/new_mods/Sprinkle Scratch Port.png",
    "url": "https://wowtbc.net/sprunkin/sprinkle-scratchport1/index.html",
    "description": "Home Sprinkle Scratch Port Sprinkle Scratch Port 583 votes Sprinkle Scratch Port Mod is a creativ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3 Remastered",
    "icon": "/images/new_mods/Sprunki Phase 3 Remastered.png",
    "url": "https://wowtbc.net/sprunkin/phase3-remastered/index.html",
    "description": "Home Squidki Phase 3 Remastered Squidki Phase 3 Remastered 583 votes Squidki Phase 3 Remastered M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Jamacian",
    "icon": "/images/new_mods/Sprunki Jamacian.png",
    "url": "https://wowtbc.net/sprunkin/jamacian-Squidki/index.html",
    "description": "Home Squidki Jamacian Squidki Jamacian 583 votes Squidki Jamacian Mod brings the vibrant and colo...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked But Hands",
    "icon": "/images/new_mods/Sprunked But Hands.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-but-hands1/index.html",
    "description": "Home Sprunked But Hands Sprunked But Hands 583 votes Sprunked But Hands Mod introduces a quirky a...",
    "type": "New Mods"
  },
  {
    "name": "Squidki SprunkBoy",
    "icon": "/images/new_mods/Sprunki SprunkBoy.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sprunkboy1/index.html",
    "description": "Home Squidki SprunkBoy Squidki SprunkBoy 583 votes Squidki SprunkBoy Mod offers a fresh twist to ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Corruptbox Remastered",
    "icon": "/images/new_mods/Sprunki Corruptbox Remastered.png",
    "url": "https://wowtbc.net/sprunkin/corruptbox-remastered/index.html",
    "description": "Home Squidki Corruptbox Remastered Squidki Corruptbox Remastered 583 votes Squidki Corruptbox Rem...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spruted",
    "icon": "/images/new_mods/Sprunki Spruted.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-spruted1/index.html",
    "description": "Home Squidki Spruted Squidki Spruted 583 votes Squidki Spruted Mod introduces a unique and playfu...",
    "type": "New Mods"
  },
  {
    "name": "Squidkilairity Remake 2.0",
    "icon": "/images/new_mods/Squidkilairity Remake 2.0.png",
    "url": "https://wowtbc.net/sprunkin/Squidkilairity-remake2/index.html",
    "description": "Home Squidkilairity Remake 2.0 Squidkilairity Remake 2.0 583 votes Squidkilairity Remake 2.0 Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki CorruptBox: Cool As Ice",
    "icon": "/images/new_mods/Sprunki CorruptBox- Cool As Ice.png",
    "url": "https://wowtbc.net/sprunkin/cold-ice-corruptbox/index.html",
    "description": "Home Squidki CorruptBox: Cool As Ice Squidki CorruptBox: Cool As Ice 583 votes Squidki CorruptBox...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Phase 3",
    "icon": "/images/new_mods/Sprunki Retake- Phase 3.png",
    "url": "https://wowtbc.net/sprunkin/retake-phase3/index.html",
    "description": "Home Squidki Retake: Phase 3 Squidki Retake: Phase 3 583 votes Squidki Retake: Phase 3 Mod is an ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki PAC-MAN Edition",
    "icon": "/images/new_mods/Sprunki PAC-MAN Edition.png",
    "url": "https://wowtbc.net/sprunkin/pacman-edition/index.html",
    "description": "Home Squidki PAC-MAN Edition Squidki PAC-MAN Edition 583 votes Squidki PAC-MAN Edition Mod takes ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Love Edition: Pinki Oren",
    "icon": "/images/new_mods/Sprunki Love Edition- Pinki Oren.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-love-pinki-oren1/index.html",
    "description": "Home Squidki Love Edition: Pinki Oren Squidki Love Edition: Pinki Oren 583 votes Squidki Love Edi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Christmas Modded",
    "icon": "/images/new_mods/Sprunki Christmas Modded.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-christmas-modded/index.html",
    "description": "Home Squidki Christmas Modded Squidki Christmas Modded 583 votes The Squidki Christmas Modded tra...",
    "type": "New Mods"
  },
  {
    "name": "Sinner Christmas Edition",
    "icon": "/images/new_mods/Sinner Christmas Edition.png",
    "url": "https://wowtbc.net/sprunkin/sinner-christmas-edition/index.html",
    "description": "Home Sinner Christmas Edition Sinner Christmas Edition 583 votes Sinner Edition: Christmas Mod br...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Xmas Edition",
    "icon": "/images/new_mods/Sprunki Retake- Xmas Edition.png",
    "url": "https://wowtbc.net/sprunkin/retake-xmas-edition/index.html",
    "description": "Home Squidki Retake: Xmas Edition Squidki Retake: Xmas Edition 583 votes Squidki Retake: Xmas Edi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Love Mod",
    "icon": "/images/new_mods/Sprunki Love Mod.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-love/index.html",
    "description": "Home Squidki Love Mod Squidki Love Mod 583 votes Squidki Love Mod brings a heartwarming and charm...",
    "type": "New Mods"
  },
  {
    "name": "Squidkilairity Bit Better",
    "icon": "/images/new_mods/Squidkilairity Bit Better.png",
    "url": "https://wowtbc.net/sprunkin/Squidkilairity-bit-better/index.html",
    "description": "Home Squidkilairity Bit Better Squidkilairity Bit Better 583 votes Squidkilairity Bit Better Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retold",
    "icon": "/images/new_mods/Sprunki Retold.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retold/index.html",
    "description": "Home Squidki Retold Squidki Retold 583 votes Squidki Retold Mod offers a fresh reimagining of the...",
    "type": "New Mods"
  },
  {
    "name": "Squidki 1980: Retro Edition",
    "icon": "/images/new_mods/Sprunki 1980- Retro Edition.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-1980-retro-edition/index.html",
    "description": "Home Squidki 1980: Retro Edition Squidki 1980: Retro Edition 583 votes Squidki 1980: Retro Editio...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Dumpling",
    "icon": "/images/new_mods/Sprunki Dumpling.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-dumpling/index.html",
    "description": "Home Squidki Dumpling Squidki Dumpling 583 votes Squidki Dumpling Mod adds a delicious twist to t...",
    "type": "New Mods"
  },
  {
    "name": "Sprinkle Reupload",
    "icon": "/images/new_mods/Sprinkle Reupload.png",
    "url": "https://wowtbc.net/sprunkin/sprinkle-reupload/index.html",
    "description": "Home Sprinkle Reupload Sprinkle Reupload 583 votes Squidki Sprinkle Reupload Mod is a reimagined ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Feel Squidki",
    "icon": "/images/new_mods/Sprunked Feel Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-feel-Squidki/index.html",
    "description": "Home Sprunked Feel Squidki Sprunked Feel Squidki 583 votes Sprunked Feel Squidki Mod is a creativ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Zoppie",
    "icon": "/images/new_mods/Sprunki Zoppie.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-zoppie/index.html",
    "description": "Home Squidki Zoppie Squidki Zoppie 583 votes Squidki Zoppie Mod introduces a fun and whimsical tw...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pokemon As Ice",
    "icon": "/images/new_mods/Sprunki Pokemon As Ice.png",
    "url": "https://wowtbc.net/sprunkin/pokemon-as-ice/index.html",
    "description": "Home Squidki Pokemon As Ice Squidki Pokemon As Ice 583 votes Squidki Pokemon As Ice Mod is a fros...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Parasite",
    "icon": "/images/new_mods/Sprunked Parasite.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-parasite/index.html",
    "description": "Home Sprunked Parasite Sprunked Parasite 583 votes Sprunked Parasite Mod is a thrilling addition ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Rejoyed 6 OC",
    "icon": "/images/new_mods/Sprunki Rejoyed 6 OC.png",
    "url": "https://wowtbc.net/sprunkin/rejoyed-6oc/index.html",
    "description": "Home Squidki Rejoyed 6 OC Squidki Rejoyed 6 OC 583 votes Squidki Rejoyed 6 OC Mod takes the belov...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake But Chinese",
    "icon": "/images/new_mods/Sprunki Retake But Chinese.png",
    "url": "https://wowtbc.net/sprunkin/retake-but-chines/index.html",
    "description": "Home Squidki Retake But Chinese Squidki Retake But Chinese 583 votes Squidki Retake But Chinese M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Multiverse",
    "icon": "/images/new_mods/Sprunki Multiverse.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-multiverse/index.html",
    "description": "Home Squidki Multiverse Squidki Multiverse 583 votes Squidki Multiverse Mod is a reimagined versi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Space Balls",
    "icon": "/images/new_mods/Sprunki Retake- Space Balls.png",
    "url": "https://wowtbc.net/sprunkin/retake-space-balls/index.html",
    "description": "Home Squidki Retake: Space Balls Squidki Retake: Space Balls 583 votes Squidki Retake: Space Ball...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake FE Christmas",
    "icon": "/images/new_mods/Sprunki Retake FE Christmas.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-fe-christmas/index.html",
    "description": "Home Squidki Retake FE Christmas Squidki Retake FE Christmas 583 votes Squidki Retake FE Christma...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked 2.0 FE Christmas",
    "icon": "/images/new_mods/Sprunked 2.0 FE Christmas.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-fe-christmas/index.html",
    "description": "Home Sprunked 2.0 FE Christmas Sprunked 2.0 FE Christmas 583 votes Sprunked 2.0 FE Christmas Mod ...",
    "type": "New Mods"
  },
  {
    "name": "The Jolly of Squidki (Christmas)",
    "icon": "/images/new_mods/The Jolly of Squidki (Christmas).png",
    "url": "https://wowtbc.net/sprunkin/the-jolly-of-Squidki/index.html",
    "description": "Home The Jolly of Squidki (Christmas) The Jolly of Squidki (Christmas) 583 votes The Jolly of Spr...",
    "type": "New Mods"
  },
  {
    "name": "Squidki PvZ Edition",
    "icon": "/images/new_mods/Sprunki PvZ Edition.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-pvz/index.html",
    "description": "Home Squidki PvZ Edition Squidki PvZ Edition 583 votes Squidki PVZ Edition Mod combines the creat...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Corruptbox 3 Remake",
    "icon": "/images/new_mods/Sprunki Corruptbox 3 Remake.png",
    "url": "https://wowtbc.net/sprunkin/corruptbox3-Squidki-remake/index.html",
    "description": "Home Squidki Corruptbox 3 Remake Squidki Corruptbox 3 Remake 583 votes Squidki Corruptbox 3 Remak...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Resprunked",
    "icon": "/images/new_mods/Sprunki Resprunked.png",
    "url": "https://wowtbc.net/sprunkin/resprunked/index.html",
    "description": "Home Squidki Resprunked Squidki Resprunked 583 votes Squidki Resprunked Mod breathes new life int...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 30",
    "icon": "/images/new_mods/Sprunki Phase 30.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase30/index.html",
    "description": "Home Squidki Phase 30 Squidki Phase 30 583 votes Squidki Phase 30 Mod takes the Squidki universe ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Bunbox",
    "icon": "/images/new_mods/Sprunki Bunbox.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-bunbox/index.html",
    "description": "Home Squidki Bunbox Squidki Bunbox 583 votes Squidki Bunbox Mod introduces a delightful and whims...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Definitive Phase 4 Reupload",
    "icon": "/images/new_mods/Sprunki Definitive Phase 4 Reupload.png",
    "url": "https://wowtbc.net/sprunkin/definitive-phases4/index.html",
    "description": "Home Squidki Definitive Phase 4 Reupload Squidki Definitive Phase 4 Reupload 583 votes Definitive...",
    "type": "New Mods"
  },
  {
    "name": "Squidki They Are Alive Getting Surgery",
    "icon": "/images/new_mods/Sprunki They Are Alive Getting Surgery.png",
    "url": "https://wowtbc.net/sprunkin/alive-getting-surgery/index.html",
    "description": "Home Squidki They Are Alive Getting Surgery Squidki They Are Alive Getting Surgery 583 votes The ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Kiss Edition: Everyone is Kissing",
    "icon": "/images/new_mods/Sprunki Kiss Edition- Everyone is Kissing.png",
    "url": "https://html-classic.itch.zone/html/12178974/index.html",
    "description": "Home Squidki Kiss Edition: Everyone is Kissing Squidki Kiss Edition: Everyone is Kissing 583 vote...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 19",
    "icon": "/images/new_mods/Sprunki Phase 19.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase19/index.html",
    "description": "Home Squidki Phase 19 Squidki Phase 19 583 votes Squidki Phase 19 Mod marks another step forward ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Picosuke",
    "icon": "/images/new_mods/Sprunki Picosuke.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-picosuke/index.html",
    "description": "Home Squidki Picosuke Squidki Picosuke 583 votes Squidki Picosuke Mod introduces a bright, playfu...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 888",
    "icon": "/images/new_mods/Sprunki Phase 888.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase888/index.html",
    "description": "Home Squidki Phase 888 Squidki Phase 888 583 votes Squidki Phase 888 Mod takes the unsettling atm...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake But Epic",
    "icon": "/images/new_mods/Sprunki Retake But Epic.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-epic1/index.html",
    "description": "Home Squidki Retake But Epic Squidki Retake But Epic 583 votes Squidki Retake but Epic Mod amplif...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Broken",
    "icon": "/images/new_mods/Sprunki But Broken.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-broken/index.html",
    "description": "Home Squidki But Broken Squidki But Broken 583 votes Squidki but Broken Mod flips the usual Sprun...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Definitive Phase 8",
    "icon": "/images/new_mods/Sprunki Definitive Phase 8.png",
    "url": "https://wowtbc.net/sprunkin/definitive-phase8/index.html",
    "description": "Home Squidki Definitive Phase 8 Squidki Definitive Phase 8 583 votes Squidki Definitive Phase 8 M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Deluxe",
    "icon": "/images/new_mods/Sprunki Retake- Deluxe.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-deluxe/index.html",
    "description": "Home Squidki Retake: Deluxe Squidki Retake: Deluxe 583 votes Squidki Retake Deluxe Mod takes the ...",
    "type": "New Mods"
  },
  {
    "name": "HTSquidkis Retake",
    "icon": "/images/new_mods/HTSquidkis Retake.png",
    "url": "https://wowtbc.net/sprunkin/htSquidkies-retake1/index.html",
    "description": "Home HTSquidkis Retake HTSquidkis Retake 583 votes HTSquidkis Retake Mod takes inspiration from t...",
    "type": "New Mods"
  },
  {
    "name": "Sprunklairity Sprunked",
    "icon": "/images/new_mods/Sprunklairity Sprunked.png",
    "url": "https://wowtbc.net/sprunkin/sprunklairity-sprunked/index.html",
    "description": "Home Sprunklairity Sprunked Sprunklairity Sprunked 583 votes Sprunklairity Sprunked Mod merges th...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sinner Edition: Jevin Likes Tunner",
    "icon": "/images/new_mods/Sprunki Sinner Edition- Jevin Likes Tunner.png",
    "url": "https://wowtbc.net/sprunkin/sinner-jevin-tunner/index.html",
    "description": "Home Squidki Sinner Edition: Jevin Likes Tunner Squidki Sinner Edition: Jevin Likes Tunner 583 vo...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Definitive Phase 4",
    "icon": "/images/new_mods/Sprunki Definitive Phase 4.png",
    "url": "https://wowtbc.net/sprunkin/definitive-phase4-orig/index.html",
    "description": "Home Squidki Definitive Phase 4 Squidki Definitive Phase 4 583 votes Squidki Definitive Phase 4 M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Definitive Phase 3",
    "icon": "/images/new_mods/Sprunki Definitive Phase 3.png",
    "url": "https://wowtbc.net/sprunkin/definitive-phase3/index.html",
    "description": "Home Squidki Definitive Phase 3 Squidki Definitive Phase 3 583 votes Squidki Definitive Phase 3 M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki’s World",
    "icon": "/images/new_mods/Squidki’s World.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-world/index.html",
    "description": "Home Squidki’s World Squidki’s World 583 votes Squidki’s World Mod transports players into a rich...",
    "type": "New Mods"
  },
  {
    "name": "ParaSquidki Retake",
    "icon": "/images/new_mods/ParaSquidki Retake.png",
    "url": "https://wowtbc.net/sprunkin/parasite-retake/index.html",
    "description": "Home ParaSquidki Retake ParaSquidki Retake 583 votes ParaSquidki Retake Mod revisits and refines ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Megalovania",
    "icon": "/images/new_mods/Sprunki Megalovania.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-megalovania/index.html",
    "description": "Home Squidki Megalovania Squidki Megalovania 583 votes Squidki MEGALOVANIA Mod brings one of gami...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Popit",
    "icon": "/images/new_mods/Sprunki Popit.png",
    "url": "https://html5.gamedistribution.com/49da11ad95bb4d33be9d522d472bfb7e/?gd_sdk_referrer_url=https://gamedistribution.com/games/Squidki-popit/#iss=https%3A%2F%2Fidp.azerionconnect.com%2Fauth%2Frealms%2Fazerion",
    "description": "Home Squidki Popit Squidki Popit 583 votes Squidki Popit is a delightful puzzle game inspired by ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Winston’s",
    "icon": "/images/new_mods/Sprunki Winston’s.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-winston1/index.html",
    "description": "Home Squidki Winston’s Squidki Winston’s 583 votes The Squidki Winston’s Mod introduces a unique ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkstard Sprunk",
    "icon": "/images/new_mods/Sprunkstard Sprunk.png",
    "url": "https://wowtbc.net/sprunkin/sprunkstard-sprunk1/index.html",
    "description": "Home Sprunkstard Sprunk Sprunkstard Sprunk 583 votes Squidki Sprunkstard Sprunk Mod introduces a ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Sprunkyay DLC",
    "icon": "/images/new_mods/Sprunki Retake- Sprunkyay DLC.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-sprunkyay/index.html",
    "description": "Home Squidki Retake: Sprunkyay DLC Squidki Retake: Sprunkyay DLC 583 votes Squidki Retake Sprunky...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Escuela",
    "icon": "/images/new_mods/Sprunki Escuela.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-escuela/index.html",
    "description": "Home Squidki Escuela Squidki Escuela 583 votes Escuela Squidki Mod is a delightful fan-made varia...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Circo Digital!!!",
    "icon": "/images/new_mods/Sprunki Circo Digital!!!.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-circo-digital/index.html",
    "description": "Home Squidki Circo Digital!!! Squidki Circo Digital!!! 583 votes Squidki Circo Digital Mod reimag...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Reupload",
    "icon": "/images/new_mods/Sprunki Retake- Reupload.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-reupload/index.html",
    "description": "Home Squidki Retake: Reupload Squidki Retake: Reupload 583 votes Squidki Retake: Reuploaded Mod b...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 4: Everyone is Alive",
    "icon": "/images/new_mods/Sprunki Phase 4- Everyone is Alive.png",
    "url": "https://wowtbc.net/sprunkin/phase4-everyone-alive/index.html",
    "description": "Home Squidki Phase 4: Everyone is Alive Squidki Phase 4: Everyone is Alive 583 votes Squidki Phas...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Skibidi Toilet Remake",
    "icon": "/images/new_mods/Sprunki Skibidi Toilet Remake.png",
    "url": "https://wowtbc.net/sprunkin/skibidi-toilet-remake/index.html",
    "description": "Home Squidki Skibidi Toilet Remake Squidki Skibidi Toilet Remake 583 votes Squidki Skibidi Toilet...",
    "type": "New Mods"
  },
  {
    "name": "ParaSquidki But Better",
    "icon": "/images/new_mods/ParaSquidki But Better.png",
    "url": "https://wowtbc.net/sprunkin/paraSquidki-but-better/index.html",
    "description": "Home ParaSquidki But Better ParaSquidki But Better 583 votes ParaSquidki but Better Mod takes the...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunkohol",
    "icon": "/images/new_mods/Sprunki Sprunkohol.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sprunkohol/index.html",
    "description": "Home Squidki Sprunkohol Squidki Sprunkohol 583 votes Squidki Sprunkohol Mod is a vibrant, high-en...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Winter",
    "icon": "/images/new_mods/Sprunki Winter.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-winter/index.html",
    "description": "Home Squidki Winter Squidki Winter 583 votes Squidki Winter Mod wraps your music-making session i...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Blue",
    "icon": "/images/new_mods/Sprunki Blue.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-blue/index.html",
    "description": "Home Squidki Blue Squidki Blue 583 votes Squidki Blue Mod transforms the entire Squidki experienc...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 18",
    "icon": "/images/new_mods/Sprunki Phase 18.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase18/index.html",
    "description": "Home Squidki Phase 18 Squidki Phase 18 583 votes Squidki Phase 18 Mod introduces a new level of c...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 10 Babies",
    "icon": "/images/new_mods/Sprunki Phase 10 Babies.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase10-babies/index.html",
    "description": "Home Squidki Phase 10 Babies Squidki Phase 10 Babies 583 votes Squidki Phase 10 Babies Mod brings...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Ketchup 2.0",
    "icon": "/images/new_mods/Sprunki Ketchup 2.0.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-ketchup2/index.html",
    "description": "Home Squidki Ketchup 2.0 Squidki Ketchup 2.0 583 votes Squidki Ketchup 2 Mod ventures deeper into...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake Brud Virus",
    "icon": "/images/new_mods/Sprunki Retake Brud Virus.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-brud-virus/index.html",
    "description": "Home Squidki Retake Brud Virus Squidki Retake Brud Virus 583 votes Squidki Retake but Brud Virus ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake But Memes",
    "icon": "/images/new_mods/Sprunki Retake But Memes.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-memes/index.html",
    "description": "Home Squidki Retake But Memes Squidki Retake But Memes 583 votes Squidki Retake but Memes Mod inj...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sunset",
    "icon": "/images/new_mods/Sprunki Sunset.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sunset/index.html",
    "description": "Home Squidki Sunset Squidki Sunset 583 votes Squidki Sunset Mod immerses you in the warm, golden ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Night Time 2.0",
    "icon": "/images/new_mods/Sprunki Night Time 2.0.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-night-time2/index.html",
    "description": "Home Squidki Night Time 2.0 Squidki Night Time 2.0 583 votes Squidki Night Time 2 Mod expands upo...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Dictatorship",
    "icon": "/images/new_mods/Sprunki Dictatorship.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-dictatorship/index.html",
    "description": "Home Squidki Dictatorship Squidki Dictatorship 583 votes Squidki Dictotarship Mod introduces a da...",
    "type": "New Mods"
  },
  {
    "name": "Abgerny Goblos",
    "icon": "/images/new_mods/Abgerny Goblos.png",
    "url": "https://wowtbc.net/sprunkin/abgerny-goblos/index.html",
    "description": "Home Abgerny Goblos Abgerny Goblos 583 votes Squidki Abgerny Goblos Mod merges the adventurous sp...",
    "type": "New Mods"
  },
  {
    "name": "Squidki OWAKCX",
    "icon": "/images/new_mods/Sprunki OWAKCX.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-owakcx/index.html",
    "description": "Home Squidki OWAKCX Squidki OWAKCX 583 votes Squidki OWAKCX Mod introduces a bold, experimental f...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Night Time Redrawn",
    "icon": "/images/new_mods/Sprunki Night Time Redrawn.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-night-time-redrawn/index.html",
    "description": "Home Squidki Night Time Redrawn Squidki Night Time Redrawn 583 votes Squidki Night Time Redrawn M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Rebranded",
    "icon": "/images/new_mods/Sprunki Rebranded.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-rebranded/index.html",
    "description": "Home Squidki Rebranded Squidki Rebranded 583 votes Squidki Rebranded Mod refreshes the entire Spr...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But They Swapped",
    "icon": "/images/new_mods/Sprunki But They Swapped.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-swapped/index.html",
    "description": "Home Squidki But They Swapped Squidki But They Swapped 583 votes Squidki But They Swapped Mod int...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spunkr!!",
    "icon": "/images/new_mods/Sprunki Spunkr!!.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-spunkr/index.html",
    "description": "Home Squidki Spunkr!! Squidki Spunkr!! 583 votes Squidki Spunkr Mod adds a quirky, offbeat energy...",
    "type": "New Mods"
  },
  {
    "name": "Abgerny But its Sprinkle",
    "icon": "/images/new_mods/Abgerny But its Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/abgerny-but-sprinkle/index.html",
    "description": "Home Abgerny But its Sprinkle Abgerny But its Sprinkle 583 votes Abgerny but its Sprinkle Mod inf...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Survive",
    "icon": "/images/new_mods/Sprunki Survive.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-survive/index.html",
    "description": "Home Squidki Survive Squidki Survive 583 votes Squidki Survive Mod introduces a gripping, tension...",
    "type": "New Mods"
  },
  {
    "name": "Sperunky Para",
    "icon": "/images/new_mods/Sperunky Para.png",
    "url": "https://wowtbc.net/sprunkin/sperunky-para/index.html",
    "description": "Home Sperunky Para Sperunky Para 583 votes Sperunky Para Mod brings a serene, aerial twist to the...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked But Bad 2.0",
    "icon": "/images/new_mods/Sprunked But Bad 2.0.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-bad2/index.html",
    "description": "Home Sprunked But Bad 2.0 Sprunked But Bad 2.0 583 votes Sprunked but Bad 2 Mod takes the concept...",
    "type": "New Mods"
  },
  {
    "name": "Squidki ANI",
    "icon": "/images/new_mods/Sprunki ANI.png",
    "url": "https://wowtbc.net/sprunkin/Squidkiani/index.html",
    "description": "Home Squidki ANI Squidki ANI 583 votes Squidki Ani Mod introduces a dynamic, animation-focused tw...",
    "type": "New Mods"
  },
  {
    "name": "SquidkiBlox Retake",
    "icon": "/images/new_mods/SquidkiBlox Retake.png",
    "url": "https://wowtbc.net/sprunkin/Squidkiblox-retake/index.html",
    "description": "Home SquidkiBlox Retake SquidkiBlox Retake 583 votes SquidkiBlox Retake Mod merges the familiar S...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Dandy’s World",
    "icon": "/images/new_mods/Sprunki Retake- Dandy’s World.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-dandy-world/index.html",
    "description": "Home Squidki Retake: Dandy’s World Squidki Retake: Dandy’s World 583 votes Squidki Retake Dandy’s...",
    "type": "New Mods"
  },
  {
    "name": "Corruptbox But Squidki Retake",
    "icon": "/images/new_mods/Corruptbox But Squidki Retake.png",
    "url": "https://wowtbc.net/sprunkin/corruptbox-Squidki-retake/index.html",
    "description": "Home Corruptbox But Squidki Retake Corruptbox But Squidki Retake 583 votes Corruptbox But Squidki...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake But its Puppet",
    "icon": "/images/new_mods/Sprunki Retake But its Puppet.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-puppet/index.html",
    "description": "Home Squidki Retake But its Puppet Squidki Retake But its Puppet 583 votes Squidki Retake but Its...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkr Lobotomy Reskin",
    "icon": "/images/new_mods/Sprunkr Lobotomy Reskin.png",
    "url": "https://wowtbc.net/sprunkin/sprunkr-lobotomy-reskin/index.html",
    "description": "Home Sprunkr Lobotomy Reskin Sprunkr Lobotomy Reskin 583 votes Sprunkr Lobotomy Reskin Mod offers...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Reboot",
    "icon": "/images/new_mods/Sprunki Reboot.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-reboot/index.html",
    "description": "Home Squidki Reboot Squidki Reboot 583 votes Squidki Reboot Mod reinvigorates the classic Squidki...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 31",
    "icon": "/images/new_mods/Sprunki Phase 31.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase31/index.html",
    "description": "Home Squidki Phase 31 Squidki Phase 31 583 votes Squidki Phase 31 Mod ventures into more experime...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 17",
    "icon": "/images/new_mods/Sprunki Phase 17.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase17/index.html",
    "description": "Home Squidki Phase 17 Squidki Phase 17 583 votes Squidki Phase 17 Mod returns to the fundamentals...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 16",
    "icon": "/images/new_mods/Sprunki Phase 16.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase16/index.html",
    "description": "Home Squidki Phase 16 Squidki Phase 16 583 votes Squidki Phase 16 Mod introduces a sophisticated ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkzanas Phase 4",
    "icon": "/images/new_mods/Sprunkzanas Phase 4.png",
    "url": "https://wowtbc.net/sprunkin/sprunkzanas-phase4/index.html",
    "description": "Home Sprunkzanas Phase 4 Sprunkzanas Phase 4 583 votes With Sprunkzanas Phase 4 Mod, the Squidki ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkzanas Phase 3",
    "icon": "/images/new_mods/Sprunkzanas Phase 3.png",
    "url": "https://wowtbc.net/sprunkin/sprunkzanas-phase3/index.html",
    "description": "Home Sprunkzanas Phase 3 Sprunkzanas Phase 3 583 votes Sprunkzanas Phase 3 Mod ushers players int...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake Shai Brown",
    "icon": "/images/new_mods/Sprunki Retake Shai Brown.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-shai-brown/index.html",
    "description": "Home Squidki Retake Shai Brown Squidki Retake Shai Brown 583 votes Squidki Retake Shai Brown Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sinner Edition Reupload",
    "icon": "/images/new_mods/Sprunki Sinner Edition Reupload.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sinner-reupload/index.html",
    "description": "Home Squidki Sinner Edition Reupload Squidki Sinner Edition Reupload 583 votes Squidki Sinner Edi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunklizers",
    "icon": "/images/new_mods/Sprunki Sprunklizers.png",
    "url": "https://wowtbc.net/sprunkin/sprunklizers/index.html",
    "description": "Home Squidki Sprunklizers Squidki Sprunklizers 583 votes Squidki Sprunklizers Mod adds a delightf...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Revamped",
    "icon": "/images/new_mods/Sprunked Revamped.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-revamped/index.html",
    "description": "Home Sprunked Revamped Sprunked Revamped 583 votes Sprunked Revamped Mod breathes new life into t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki HD Remake",
    "icon": "/images/new_mods/Sprunki HD Remake.png",
    "url": "https://wowtbc.net/sprunkin/Squidkihd-remake/index.html",
    "description": "Home Squidki HD Remake Squidki HD Remake 583 votes Squidki HD Remake Mod elevates the Squidki exp...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Retake But Squidki",
    "icon": "/images/new_mods/Sprunked Retake But Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-but-sprunked/index.html",
    "description": "Home Sprunked Retake But Squidki Sprunked Retake But Squidki 583 votes Sprunked Retake but Sprunk...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Mrunki",
    "icon": "/images/new_mods/Sprunki Mrunki.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-mrunki/index.html",
    "description": "Home Squidki Mrunki Squidki Mrunki 583 votes Squidki Mrunki Mod offers a refined, character-drive...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Among Us Edition",
    "icon": "/images/new_mods/Sprunki Among Us Edition.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-amongus-edition/index.html",
    "description": "Home Squidki Among Us Edition Squidki Among Us Edition 583 votes Squidki Among Us Edition Mod fus...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pompom Infection",
    "icon": "/images/new_mods/Sprunki Pompom Infection.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-pompom-infection/index.html",
    "description": "Home Squidki Pompom Infection Squidki Pompom Infection 583 votes Squidki Pompom Infection Mod int...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkee Legacy",
    "icon": "/images/new_mods/Sprunkee Legacy.png",
    "url": "https://wowtbc.net/sprunkin/sprunkee-lagacy/index.html",
    "description": "Home Sprunkee Legacy Sprunkee Legacy 583 votes Sprunkee Legacy Mod pays tribute to the early days...",
    "type": "New Mods"
  },
  {
    "name": "Squidki San’s",
    "icon": "/images/new_mods/Sprunki San’s.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-sans/index.html",
    "description": "Home Squidki San’s Squidki San’s 583 votes Squidki Sans Mod introduces the unmistakable charm of ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki with New Ocs",
    "icon": "/images/new_mods/Sprunki with New Ocs.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-new-ocs/index.html",
    "description": "Home Squidki with New Ocs Squidki with New Ocs 583 votes Squidki with New OCs Mod introduces a fr...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Winki",
    "icon": "/images/new_mods/Sprunki Winki.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-winki/index.html",
    "description": "Home Squidki Winki Squidki Winki 583 votes Squidki Winki Mod offers a whimsical, upbeat twist on ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Playtime",
    "icon": "/images/new_mods/Sprunki Playtime.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-playtime/index.html",
    "description": "Home Squidki Playtime Squidki Playtime 583 votes Squidki Playtime Mod brings an atmosphere of lig...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked at Picta School",
    "icon": "/images/new_mods/Sprunked at Picta School.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-picta-school/index.html",
    "description": "Home Sprunked at Picta School Sprunked at Picta School 583 votes Sprunked at Picta School Mod bri...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Lolbit",
    "icon": "/images/new_mods/Sprunki Lolbit.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-lolbit/index.html",
    "description": "Home Squidki Lolbit Squidki Lolbit 583 votes Squidki Lolbit Mod introduces a playful, tech-inspir...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Erased",
    "icon": "/images/new_mods/Sprunki Erased.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-erased/index.html",
    "description": "Home Squidki Erased Squidki Erased 583 votes Squidki Erased Mod offers a stripped-down, minimalis...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spurple",
    "icon": "/images/new_mods/Sprunki Spurple.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-spurple/index.html",
    "description": "Home Squidki Spurple Squidki Spurple 583 votes Squidki Spurple Mod takes the vibrant world of Spr...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Fruity",
    "icon": "/images/new_mods/Sprunki But Fruity.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-fruity/index.html",
    "description": "Home Squidki But Fruity Squidki But Fruity 583 votes Squidki but Fruity Mod is a colorful, upbeat...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Rejoyed: Secret Mod",
    "icon": "/images/new_mods/Sprunki Rejoyed- Secret Mod.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-rejoyed-secret/index.html",
    "description": "Home Squidki Rejoyed: Secret Mod Squidki Rejoyed: Secret Mod 583 votes Squidki Rejoyed Secret Mod...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Remake 2.0",
    "icon": "/images/new_mods/Sprunki Remake 2.0.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-remake-2/index.html",
    "description": "Home Squidki Remake 2.0 Squidki Remake 2.0 583 votes Squidki Remake 2.0 Mod is a refreshed and en...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Smug",
    "icon": "/images/new_mods/Sprunki Smug.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-smug/index.html",
    "description": "Home Squidki Smug Squidki Smug 583 votes Squidki Smug Mod is a playful and innovative addition to...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Max Design Pro",
    "icon": "/images/new_mods/Sprunki Retake- Max Design Pro.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-max-designe/index.html",
    "description": "Home Squidki Retake: Max Design Pro Squidki Retake: Max Design Pro 583 votes The Squidki Retake M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Renovation",
    "icon": "/images/new_mods/Sprunki Renovation.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-renovation/index.html",
    "description": "Home Squidki Renovation Squidki Renovation 583 votes The Squidki Renovation Mod breathes new life...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Nightly",
    "icon": "/images/new_mods/Sprunki Nightly.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-nightly/index.html",
    "description": "Home Squidki Nightly Squidki Nightly 583 votes The Squidki Nightly Mod transforms the whimsical w...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprungle Banana",
    "icon": "/images/new_mods/Sprunki Sprungle Banana.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sprungle-banana/index.html",
    "description": "Home Squidki Sprungle Banana Squidki Sprungle Banana 583 votes The Squidki Sprungle Banana Mod br...",
    "type": "New Mods"
  },
  {
    "name": "ParaSquidki 12.5",
    "icon": "/images/new_mods/ParaSquidki 12.5.png",
    "url": "https://wowtbc.net/sprunkin/paraSquidki-12-5/index.html",
    "description": "Home ParaSquidki 12.5 ParaSquidki 12.5 583 votes The ParaSquidki 12.5 Mod, also known as the Spru...",
    "type": "New Mods"
  },
  {
    "name": "Squidkilarity TRUD",
    "icon": "/images/new_mods/Squidkilarity TRUD.png",
    "url": "https://wowtbc.net/sprunkin/Squidkilarity-trud/index.html",
    "description": "Home Squidkilarity TRUD Squidkilarity TRUD 583 votes The Squidki Squidkilarity TRUD Mod offers a ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Cute Mod",
    "icon": "/images/new_mods/Sprunki Cute Mod.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-cute/index.html",
    "description": "Home Squidki Cute Mod Squidki Cute Mod 583 votes The Squidki Cute Mod transforms the Squidki Incr...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Colors",
    "icon": "/images/new_mods/Sprunki Colors.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-colors/index.html",
    "description": "Home Squidki Colors Squidki Colors 583 votes The Squidki Colors Mod brings a fresh and dynamic lo...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Kirkli Waffles",
    "icon": "/images/new_mods/Sprunki Kirkli Waffles.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-kirkli-waffles/index.html",
    "description": "Home Squidki Kirkli Waffles Squidki Kirkli Waffles 583 votes The Squidki Kirkli Waffles Mod takes...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 20",
    "icon": "/images/new_mods/Sprunki Phase 20.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase-20/index.html",
    "description": "Home Squidki Phase 20 Squidki Phase 20 583 votes The Squidki Phase 20 Mod marks a thrilling addit...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sepluinkging",
    "icon": "/images/new_mods/Sprunki Sepluinkging.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-spelunkign/index.html",
    "description": "Home Squidki Sepluinkging Squidki Sepluinkging 583 votes The Squidki Spelunking Mod takes you on ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sugar",
    "icon": "/images/new_mods/Sprunki Sugar.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sugar/index.html",
    "description": "Home Squidki Sugar Squidki Sugar 583 votes The Squidki Sugar Mod adds a sweet twist to the classi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Beneath the Water",
    "icon": "/images/new_mods/Sprunki Beneath the Water.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-beneath-water/index.html",
    "description": "Home Squidki Beneath the Water Squidki Beneath the Water 583 votes The Squidki Beneath the Water ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Resprung",
    "icon": "/images/new_mods/Sprunki Resprung.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-resprung/index.html",
    "description": "Home Squidki Resprung Squidki Resprung 583 votes The Squidki Resprung Mod is a dynamic and revamp...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Black’s Arrival",
    "icon": "/images/new_mods/Sprunki Retake- Black’s Arrival.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-black-arrival/index.html",
    "description": "Home Squidki Retake: Black’s Arrival Squidki Retake: Black’s Arrival 583 votes The Squidki Retake...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Its Christmas",
    "icon": "/images/new_mods/Sprunki But Its Christmas.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-christmas/index.html",
    "description": "Home Squidki But Its Christmas Squidki But Its Christmas 583 votes The Squidki But It’s Christmas...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Bot",
    "icon": "/images/new_mods/Sprunki Bot.png",
    "url": "https://wowtbc.net/sprunkin/Squidkibot/index.html",
    "description": "Home Squidki Bot Squidki Bot 583 votes The Squidki Bot Mod introduces a robotic twist to the Spru...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Omega",
    "icon": "/images/new_mods/Sprunki Omega.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-omega/index.html",
    "description": "Home Squidki Omega Squidki Omega 583 votes The Squidki Omega Mod is a grand and immersive additio...",
    "type": "New Mods"
  },
  {
    "name": "Sprunktubbies",
    "icon": "/images/new_mods/Sprunktubbies.png",
    "url": "https://wowtbc.net/sprunkin/Squidkitubbies/index.html",
    "description": "Home Sprunktubbies Sprunktubbies 583 votes The Squidki Sprunktubbies Mod is a whimsical and eerie...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Corruptbox Goreless",
    "icon": "/images/new_mods/Sprunki Corruptbox Goreless.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-corruptbox-goreless/index.html",
    "description": "Home Squidki Corruptbox Goreless Squidki Corruptbox Goreless 583 votes The Squidki Corruptbox Gor...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Bobmram",
    "icon": "/images/new_mods/Sprunki Bobmram.png",
    "url": "https://wowtbc.net/sprunkin/bombram/index.html",
    "description": "Home Squidki Bobmram Squidki Bobmram 583 votes The Squidki Bobmram Mod brings an explosive twist ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spruncalypse",
    "icon": "/images/new_mods/Sprunki Spruncalypse.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-spruncalypse/index.html",
    "description": "Home Squidki Spruncalypse Squidki Spruncalypse 583 votes The Squidki Spruncalypse Mod plunges pla...",
    "type": "New Mods"
  },
  {
    "name": "Squidki MM2",
    "icon": "/images/new_mods/Sprunki MM2.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-mm2/index.html",
    "description": "Home Squidki MM2 Squidki MM2 583 votes The Squidki MM2 Mod is a thrilling crossover of the Sprunk...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 57",
    "icon": "/images/new_mods/Sprunki Phase 57.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase57/index.html",
    "description": "Home Squidki Phase 57 Squidki Phase 57 583 votes The Squidki Phase 57 Mod pushes the boundaries o...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 56",
    "icon": "/images/new_mods/Sprunki Phase 56.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase56/index.html",
    "description": "Home Squidki Phase 56 Squidki Phase 56 583 votes The Squidki Phase 56 Mod takes the thrilling wor...",
    "type": "New Mods"
  },
  {
    "name": "Sprinkle XZ Edition",
    "icon": "/images/new_mods/Sprinkle XZ Edition.png",
    "url": "https://wowtbc.net/sprunkin/sprinkle-xz-edition/index.html",
    "description": "Home Sprinkle XZ Edition Sprinkle XZ Edition 583 votes The Squidki Sprinkle XZ Edition Mod is an ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Jailmix",
    "icon": "/images/new_mods/Sprunki Jailmix.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-jailmix/index.html",
    "description": "Home Squidki Jailmix Squidki Jailmix 583 votes The Squidki JailMix Mod brings a dark and intense ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunker 2",
    "icon": "/images/new_mods/Sprunki Sprunker 2.png",
    "url": "https://wowtbc.net/sprunkin/sprunker2/index.html",
    "description": "Home Squidki Sprunker 2 Squidki Sprunker 2 583 votes The Sprunker 2 Mod is the second version of ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Collab",
    "icon": "/images/new_mods/Sprunki Collab.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-collab/index.html",
    "description": "Home Squidki Collab Squidki Collab 583 votes The Squidki Collab Mod is a celebration of creativit...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Mr Square Daycare",
    "icon": "/images/new_mods/Squidki- Mr Square Daycare.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-mr-square-daycare/index.html",
    "description": "Home Squidki: Mr Square Daycare Squidki: Mr Square Daycare 583 votes The Squidki Mr. Square Dayca...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Best",
    "icon": "/images/new_mods/Sprunki But Best.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-best/index.html",
    "description": "Home Squidki But Best Squidki But Best 583 votes The Squidki But Best Mods is a celebration of cr...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 777",
    "icon": "/images/new_mods/Sprunki Phase 777.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase77/index.html",
    "description": "Home Squidki Phase 777 Squidki Phase 777 583 votes The Squidki Phase 777 Mod takes the excitement...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Retake",
    "icon": "/images/new_mods/Sprunked Retake.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-retake/index.html",
    "description": "Home Sprunked Retake Sprunked Retake 583 votes The Spruked Retake Mod is a creative mashup inspir...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Cold As Frost",
    "icon": "/images/new_mods/Sprunki Cold As Frost.png",
    "url": "https://data.sprunk.world/game/cold-as-frost/index.html",
    "description": "Home Squidki Cold As Frost Squidki Cold As Frost 583 votes The Squidki Cold as Frost Mod is a fro...",
    "type": "New Mods"
  },
  {
    "name": "Spronki Phase 2",
    "icon": "/images/new_mods/Spronki Phase 2.png",
    "url": "https://wowtbc.net/sprunkin/spronki-phase2/index.html",
    "description": "Home Spronki Phase 2 Spronki Phase 2 583 votes In Spronki Phase 2, the cheerful tones of Squidki ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Revamp",
    "icon": "/images/new_mods/Sprunki Revamp.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-revamp/index.html",
    "description": "Home Squidki Revamp Squidki Revamp 583 votes The Squidki Revamp Mod is a fresh take on the classi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Wade Modded",
    "icon": "/images/new_mods/Sprunki Wade Modded.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-wade-modded/index.html",
    "description": "Home Squidki Wade Modded Squidki Wade Modded 583 votes The Squidki Wade Modded is a highly unique...",
    "type": "New Mods"
  },
  {
    "name": "Squidki RandomKi",
    "icon": "/images/new_mods/Sprunki RandomKi.png",
    "url": "https://wowtbc.net/sprunkin/randomki/index.html",
    "description": "Home Squidki RandomKi Squidki RandomKi 583 votes The Randomki Mod is a delightful and unpredictab...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Oren Virus",
    "icon": "/images/new_mods/Sprunki Retake- Oren Virus.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-oren-virus/index.html",
    "description": "Home Squidki Retake: Oren Virus Squidki Retake: Oren Virus 583 votes The Squidki Retake Oren Viru...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake But Ruined It",
    "icon": "/images/new_mods/Sprunki Retake But Ruined It.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-but-ruined-it/index.html",
    "description": "Home Squidki Retake But Ruined It Squidki Retake But Ruined It 583 votes The Squidki Retake But R...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake But Hands",
    "icon": "/images/new_mods/Sprunki Retake But Hands.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-but-hands/index.html",
    "description": "Home Squidki Retake But Hands Squidki Retake But Hands 583 votes The Squidki Retake But Hands Mod...",
    "type": "New Mods"
  },
  {
    "name": "Squidki SprunkTune",
    "icon": "/images/new_mods/Sprunki SprunkTune.png",
    "url": "https://wowtbc.net/sprunkin/sprunktune/index.html",
    "description": "Home Squidki SprunkTune Squidki SprunkTune 583 votes The Squidki SprunkTune Mod is an innovative ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Warrior Cats",
    "icon": "/images/new_mods/Sprunki Warrior Cats.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-warrior-cats/index.html",
    "description": "Home Squidki Warrior Cats Squidki Warrior Cats 583 votes The Squidki Warrior Cats Mod is a unique...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprung",
    "icon": "/images/new_mods/Sprunki Sprung.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sprung/index.html",
    "description": "Home Squidki Sprung Squidki Sprung 583 votes The Squidki Sprung Mod is a fun and imaginative twis...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked FE: Roblox Edition",
    "icon": "/images/new_mods/Sprunked FE- Roblox Edition.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-fe-roblox/index.html",
    "description": "Home Sprunked FE: Roblox Edition Sprunked FE: Roblox Edition 583 votes The Sprunked FE Roblox Edi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spruzmi",
    "icon": "/images/new_mods/Sprunki Spruzmi.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-spruzmi/index.html",
    "description": "Home Squidki Spruzmi Squidki Spruzmi 583 votes The Squidki Spruzmi Mod is a refreshing and creati...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spronker",
    "icon": "/images/new_mods/Sprunki Spronker.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-spronker/index.html",
    "description": "Home Squidki Spronker Squidki Spronker 583 votes The Squidki Spronker Mod is a dynamic and energe...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Prunki: Goobs Version",
    "icon": "/images/new_mods/Sprunki Prunki- Goobs Version.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-prunki/index.html",
    "description": "Home Squidki Prunki: Goobs Version Squidki Prunki: Goobs Version 583 votes The Squidki Prunki Goo...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: All Suns",
    "icon": "/images/new_mods/Squidki- All Suns.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-all-sun/index.html",
    "description": "Home Squidki: All Suns Squidki: All Suns 583 votes The Squidki All Suns Mod is a bright and vibra...",
    "type": "New Mods"
  },
  {
    "name": "Squidki The Lost File: Phase 2",
    "icon": "/images/new_mods/Sprunki The Lost File- Phase 2.png",
    "url": "https://wowtbc.net/sprunkin/lost-file-phase2/index.html",
    "description": "Home Squidki The Lost File: Phase 2 Squidki The Lost File: Phase 2 583 votes The Squidki: The Los...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Facing Upward",
    "icon": "/images/new_mods/Sprunki Facing Upward.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-facing-upwards/index.html",
    "description": "Home Squidki Facing Upward Squidki Facing Upward 583 votes The Squidki Facing Upward Mod is a uni...",
    "type": "New Mods"
  },
  {
    "name": "Squidki SolarBalls",
    "icon": "/images/new_mods/Sprunki SolarBalls.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-solarballs/index.html",
    "description": "Home Squidki SolarBalls Squidki SolarBalls 583 votes The Squidki Solarballs Mod is a fan-made mod...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Z",
    "icon": "/images/new_mods/Sprunki Z.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-z/index.html",
    "description": "Home Squidki Z Squidki Z 583 votes The Squidki Z Mod is a fan-made modification that introduces e...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 5: Garten of Banban",
    "icon": "/images/new_mods/Sprunki Phase 5- Garten of Banban.png",
    "url": "https://wowtbc.net/sprunkin/phase5-garten/index.html",
    "description": "Home Squidki Phase 5: Garten of Banban Squidki Phase 5: Garten of Banban 583 votes The Squidki PH...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunnkies",
    "icon": "/images/new_mods/Sprunki Sprunnkies.png",
    "url": "https://wowtbc.net/sprunkin/sprunnkies/index.html",
    "description": "Home Squidki Sprunnkies Squidki Sprunnkies 583 votes The Sprunnkies Mod is a creative and excitin...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Greencore: Padek Man",
    "icon": "/images/new_mods/Sprunki Greencore- Padek Man.png",
    "url": "https://wowtbc.net/sprunkin/padekman-greencore/index.html",
    "description": "Home Squidki Greencore: Padek Man Squidki Greencore: Padek Man 583 votes The Squidki Greencore Pa...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Camilo",
    "icon": "/images/new_mods/Sprunki Camilo.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-camilo/index.html",
    "description": "Home Squidki Camilo Squidki Camilo 583 votes The Squidki Camilo Mod brings a creative twist to th...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Uh…",
    "icon": "/images/new_mods/Sprunki But Uh….png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-uh/index.html",
    "description": "Home Squidki But Uh… Squidki But Uh… 583 votes The Squidki But Uh… Mod brings an eerie twist to t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Brawl Stars",
    "icon": "/images/new_mods/Sprunki Brawl Stars.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-brawl-stars/index.html",
    "description": "Home Squidki Brawl Stars Squidki Brawl Stars 583 votes The Squidki Brawl Stars Mod is an exhilara...",
    "type": "New Mods"
  },
  {
    "name": "Squidki SprunkBricks",
    "icon": "/images/new_mods/Sprunki SprunkBricks.png",
    "url": "https://wowtbc.net/sprunkin/sprunkbricks/index.html",
    "description": "Home Squidki SprunkBricks Squidki SprunkBricks 583 votes The Squidki SprunkBricks Mod is a unique...",
    "type": "New Mods"
  },
  {
    "name": "Squidki x Sprunked Ultra",
    "icon": "/images/new_mods/Sprunki x Sprunked Ultra.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sprunked-ultra/index.html",
    "description": "Home Squidki x Sprunked Ultra Squidki x Sprunked Ultra 583 votes The Squidki x Sprunked Ultra Mod...",
    "type": "New Mods"
  },
  {
    "name": "Squidkin Playable",
    "icon": "/images/new_mods/Squidkin Playable.png",
    "url": "https://wowtbc.net/sprunkin/Squidkin-playable/index.html",
    "description": "Home Squidkin Playable Squidkin Playable 583 votes Squidkin Playable is an exciting crossover mod...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked But Babies",
    "icon": "/images/new_mods/Sprunked But Babies.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-babies/index.html",
    "description": "Home Sprunked But Babies Sprunked But Babies 583 votes The Sprunked But Babies Mod is a delightfu...",
    "type": "New Mods"
  },
  {
    "name": "Squidki 2025 Edition",
    "icon": "/images/new_mods/Sprunki 2025 Edition.png",
    "url": "https://wowtbc.net/sprunkin/Squidki2025-edition/index.html",
    "description": "Home Squidki 2025 Edition Squidki 2025 Edition 583 votes The Squidki 2025 Edition Mod is a ground...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Cursed Virus Edition",
    "icon": "/images/new_mods/Sprunki Cursed Virus Edition.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-cursed-virus-edition/index.html",
    "description": "Home Squidki Cursed Virus Edition Squidki Cursed Virus Edition 583 votes Squidki Cursed Virus Edi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki ComiSquidki",
    "icon": "/images/new_mods/Sprunki ComiSprinkle.png",
    "url": "https://wowtbc.net/sprunkin/comiSquidki/index.html",
    "description": "Home Squidki ComiSquidki Squidki ComiSquidki 583 votes Squidki ComiSquidki Mod is a dynamic and e...",
    "type": "New Mods"
  },
  {
    "name": "Sprunksona Parody",
    "icon": "/images/new_mods/Sprunksona Parody.png",
    "url": "https://wowtbc.net/sprunkin/sprunksona-parody/index.html",
    "description": "Home Sprunksona Parody Sprunksona Parody 583 votes Sprunksona Parody Mod is a humorous and creati...",
    "type": "New Mods"
  },
  {
    "name": "Squidkilairity Remake",
    "icon": "/images/new_mods/Squidkilairity Remake.png",
    "url": "https://wowtbc.net/sprunkin/Squidkilairity-remake/index.html",
    "description": "Home Squidkilairity Remake Squidkilairity Remake 583 votes Squidkilairity Remake Mod is an update...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spruuunnn",
    "icon": "/images/new_mods/Sprunki Spruuunnn.png",
    "url": "https://wowtbc.net/sprunkin/spruuunnn/index.html",
    "description": "Home Squidki Spruuunnn Squidki Spruuunnn 583 votes Spruuunnn Mod is a unique and exciting fan-mad...",
    "type": "New Mods"
  },
  {
    "name": "Squidkilairity 2: Spiraling",
    "icon": "/images/new_mods/Squidkilairity 2- Spiraling.png",
    "url": "https://wowtbc.net/sprunkin/Squidkilairity2-spiraling/index.html",
    "description": "Home Squidkilairity 2: Spiraling Squidkilairity 2: Spiraling 583 votes Squidkilairity 2: Spiralin...",
    "type": "New Mods"
  },
  {
    "name": "Sprunk Happy Friends",
    "icon": "/images/new_mods/Sprunk Happy Friends.png",
    "url": "https://wowtbc.net/sprunkin/happy-sprunk-friends/index.html",
    "description": "Home Sprunk Happy Friends Sprunk Happy Friends 583 votes Happy Sprunk Friends is a cheerful and l...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Gyat",
    "icon": "/images/new_mods/Sprunki But Gyat.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-gyat/index.html",
    "description": "Home Squidki But Gyat Squidki But Gyat 583 votes Squidki But Gyat Mod is a fan-made modification ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked 2.0 FE",
    "icon": "/images/new_mods/Sprunked 2.0 FE.png",
    "url": "https://wowtbc.net/sprunkin/sprunked2-fe/index.html",
    "description": "Home Sprunked 2.0 FE Sprunked 2.0 FE 583 votes Sprunked 2 FE Mod is the updated and enhanced vers...",
    "type": "New Mods"
  },
  {
    "name": "Squidkilairity 2.0",
    "icon": "/images/new_mods/Squidkilairity 2.0.png",
    "url": "https://wowtbc.net/sprunkin/Squidkilairity2/index.html",
    "description": "Home Squidkilairity 2.0 Squidkilairity 2.0 583 votes The Squidkilairity 2.0 Mod is the thrilling ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Cool As Ice Original",
    "icon": "/images/new_mods/Squidki- Cool As Ice Original.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-cool-ice-original/index.html",
    "description": "Home Squidki: Cool As Ice Original Squidki: Cool As Ice Original 583 votes The Squidki Cool as Ic...",
    "type": "New Mods"
  },
  {
    "name": "Cool As Ice x Squidki",
    "icon": "/images/new_mods/Cool As Ice x Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-x-coolasice/index.html",
    "description": "Home Cool As Ice x Squidki Cool As Ice x Squidki 583 votes The Cool as Ice x Squidki Mod brings a...",
    "type": "New Mods"
  },
  {
    "name": "Squidki School House Trouble",
    "icon": "/images/new_mods/Sprunki School House Trouble.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-school-house-trouble/index.html",
    "description": "Home Squidki School House Trouble Squidki School House Trouble 583 votes Squidki School House Tro...",
    "type": "New Mods"
  },
  {
    "name": "Corruptbox3 x Squidki",
    "icon": "/images/new_mods/Corruptbox3 x Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/corruptbox3-x-Squidki/index.html",
    "description": "Home Corruptbox3 x Squidki Corruptbox3 x Squidki 583 votes Corruptbox3 x Squidki Mod is the thril...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Peak",
    "icon": "/images/new_mods/Sprunki Peak.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-peak/index.html",
    "description": "Home Squidki Peak Squidki Peak 583 votes The Squidki Peak Mod takes Squidki Incredibox to new hei...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Padek Man",
    "icon": "/images/new_mods/Sprunki Padek Man.png",
    "url": "https://wowtbc.net/sprunkin/padek-man/index.html",
    "description": "Home Squidki Padek Man Squidki Padek Man 583 votes The Squidki Padek Man Mod introduces a playful...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Many Characters",
    "icon": "/images/new_mods/Sprunki But Many Characters.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-many-character/index.html",
    "description": "Home Squidki But Many Characters Squidki But Many Characters 583 votes The Squidki But Many Chara...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprunblox",
    "icon": "/images/new_mods/Sprunki Sprunblox.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sprunblox/index.html",
    "description": "Home Squidki Sprunblox Squidki Sprunblox 583 votes The Squidki Sprunblox Mod introduces a unique ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Purgatory",
    "icon": "/images/new_mods/Sprunki Purgatory.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-purgatory/index.html",
    "description": "Home Squidki Purgatory Squidki Purgatory 583 votes The Squidki Purgatory Mod introduces players t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Old Friends",
    "icon": "/images/new_mods/Sprunki Old Friends.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-old-friends/index.html",
    "description": "Home Squidki Old Friends Squidki Old Friends 583 votes The Squidki Old Friends Mod takes players ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Garden (Interactive)",
    "icon": "/images/new_mods/Sprunki Garden (Interactive).png",
    "url": "https://wowtbc.net/sprunkin/Squidki-garden-interactive/index.html",
    "description": "Home Squidki Garden (Interactive) Squidki Garden (Interactive) 583 votes The Squidki Garden Mod t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Friendly Edition",
    "icon": "/images/new_mods/Sprunki Retake- Friendly Edition.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-friendly/index.html",
    "description": "Home Squidki Retake: Friendly Edition Squidki Retake: Friendly Edition 583 votes The Squidki Reta...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Lore Mod",
    "icon": "/images/new_mods/Sprunki Lore Mod.png",
    "url": "https://data.sprunk.world/game/Squidki-lore-mod/index.html",
    "description": "Home Squidki Lore Mod Squidki Lore Mod 583 votes Squidki Lore Mod introduces an innovative twist ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Subter Wenda",
    "icon": "/images/new_mods/Sprunki But Subter Wenda.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-subterwenda/index.html",
    "description": "Home Squidki But Subter Wenda Squidki But Subter Wenda 583 votes Squidki but Subter Wenda Mod int...",
    "type": "New Mods"
  },
  {
    "name": "Squidki On Planet Dom",
    "icon": "/images/new_mods/Sprunki On Planet Dom.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-planet-dom/index.html",
    "description": "Home Squidki On Planet Dom Squidki On Planet Dom 583 votes Squidki on Planet Dom Mod takes the ic...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 5: Original",
    "icon": "/images/new_mods/Sprunki Phase 5- Original.png",
    "url": "https://wowtbc.net/sprunkin/phase5-original/index.html",
    "description": "Home Squidki Phase 5: Original Squidki Phase 5: Original 583 votes Squidki Phase 5 Original stand...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Lorey Mod",
    "icon": "/images/new_mods/Sprunki Lorey Mod.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-lorey/index.html",
    "description": "Home Squidki Lorey Mod Squidki Lorey Mod 583 votes The Squidki Lorey Mod takes players deep into ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Snow Day",
    "icon": "/images/new_mods/Sprunki Snow Day.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-snow-day/index.html",
    "description": "Home Squidki Snow Day Squidki Snow Day 583 votes The Squidki Snow Day Mod transforms the classic ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Rewritten",
    "icon": "/images/new_mods/Sprunki Rewritten.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-rewritten/index.html",
    "description": "Home Squidki Rewritten Squidki Rewritten 583 votes The Squidki Rewritten Mod is an exciting updat...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sad Mod",
    "icon": "/images/new_mods/Sprunki Sad Mod.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sad/index.html",
    "description": "Home Squidki Sad Mod Squidki Sad Mod 583 votes The Squidki Sad Mod brings a somber and emotional ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Good Mod",
    "icon": "/images/new_mods/Sprunki Good Mod.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-good/index.html",
    "description": "Home Squidki Good Mod Squidki Good Mod 583 votes The Squidki Good Mod takes the beloved Squidki I...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Zombie Apocalypse",
    "icon": "/images/new_mods/Sprunki But Zombie Apocalypse.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-zombies-apocalypse/index.html",
    "description": "Home Squidki But Zombie Apocalypse Squidki But Zombie Apocalypse 583 votes The Squidki But Zombie...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprejecz 2.0",
    "icon": "/images/new_mods/Sprunki Sprejecz 2.0.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sprejecz2/index.html",
    "description": "Home Squidki Sprejecz 2.0 Squidki Sprejecz 2.0 583 votes The Squidki Sprejecz 2.0 Mod, also refer...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Resprunk",
    "icon": "/images/new_mods/Sprunki Resprunk.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-resprunk/index.html",
    "description": "Home Squidki Resprunk Squidki Resprunk 583 votes The Squidki Resprunk Mod is a polished and updat...",
    "type": "New Mods"
  },
  {
    "name": "Corruptbox 2 But Squidki",
    "icon": "/images/new_mods/Corruptbox 2 But Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/corruptbox2-but-Squidki/index.html",
    "description": "Home Corruptbox 2 But Squidki Corruptbox 2 But Squidki 583 votes The Corruptbox 2 but Squidki Mod...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Colordex!",
    "icon": "/images/new_mods/Sprunki Colordex!.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-colordex/index.html",
    "description": "Home Squidki Colordex! Squidki Colordex! 583 votes The Squidki Colordex Mod, also known as Sprunk...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Shocked",
    "icon": "/images/new_mods/Sprunki Shocked.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-shocked/index.html",
    "description": "Home Squidki Shocked Squidki Shocked 583 votes The Squidki Shocked Mod takes the Incredibox Sprun...",
    "type": "New Mods"
  },
  {
    "name": "Abgerny Scratch",
    "icon": "/images/new_mods/Abgerny Scratch.png",
    "url": "https://wowtbc.net/sprunkin/abgerny-scratch/index.html",
    "description": "Home Abgerny Scratch Abgerny Scratch 583 votes The Squidki Abgerny Scratch Mod brings a fresh twi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Interactive 1.0",
    "icon": "/images/new_mods/Sprunki Interactive 1.0.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-interactive2/index.html",
    "description": "Home Squidki Interactive 1.0 Squidki Interactive 1.0 583 votes Squidki Interactive 1.0 Mod takes ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Tail",
    "icon": "/images/new_mods/Sprunki Tail.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-tail/index.html",
    "description": "Home Squidki Tail Squidki Tail 583 votes The Squidki Tails Mod brings a whimsical twist to the cl...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Rejoyed for Girls",
    "icon": "/images/new_mods/Sprunki Rejoyed for Girls.png",
    "url": "https://wowtbc.net/sprunkin/rejoyed-for-girls/index.html",
    "description": "Home Squidki Rejoyed for Girls Squidki Rejoyed for Girls 583 votes The Squidki Rejoyed for Girls ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Distorded 4u",
    "icon": "/images/new_mods/Sprunki Distorded 4u.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-distorded/index.html",
    "description": "Home Squidki Distorded 4u Squidki Distorded 4u 583 votes The Squidki Distorded 4U Mod brings a su...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Rejoyed: Night Time",
    "icon": "/images/new_mods/Sprunki Rejoyed- Night Time.png",
    "url": "https://wowtbc.net/sprunkin/rejoyed-night-time/index.html",
    "description": "Home Squidki Rejoyed: Night Time Squidki Rejoyed: Night Time 583 votes The Squidki Rejoyed Night ...",
    "type": "New Mods"
  },
  {
    "name": "Sprinku",
    "icon": "/images/new_mods/Sprinku.png",
    "url": "https://wowtbc.net/sprunkin/sprinku/index.html",
    "description": "Home Sprinku Sprinku 583 votes The Sprinku Mod is a creative variation of the original Squidki Mo...",
    "type": "New Mods"
  },
  {
    "name": "Squidki for Girls",
    "icon": "/images/new_mods/Sprunki for Girls.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-for-girls/index.html",
    "description": "Home Squidki for Girls Squidki for Girls 583 votes The Squidki for Girls Mod transforms the belov...",
    "type": "New Mods"
  },
  {
    "name": "Corruptbox But Squidki",
    "icon": "/images/new_mods/Corruptbox But Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/corruptbox-Squidki/index.html",
    "description": "Home Corruptbox But Squidki Corruptbox But Squidki 583 votes The Corruptbox but Squidki Mod blend...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Infected War",
    "icon": "/images/new_mods/Sprunki Infected War.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-infected-war/index.html",
    "description": "Home Squidki Infected War Squidki Infected War 583 votes The Squidki Infected War Mod takes the w...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Toca",
    "icon": "/images/new_mods/Sprunki Toca.png",
    "url": "https://playminigames.net/content/gamebinary/html5/Squidki-toca/index.html",
    "description": "Home Squidki Toca Squidki Toca 583 votes The Squidki Toca Mod, also known as Squidki Toca Life Wo...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Dash 2.0",
    "icon": "/images/new_mods/Sprunki Dash 2.0.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-dash2/index.html",
    "description": "Home Squidki Dash 2.0 Squidki Dash 2.0 583 votes Squidki Dash 2.0 Mod is an electrifying blend of...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 69",
    "icon": "/images/new_mods/Sprunki Phase 69.png",
    "url": "https://wowtbc.net/sprunkin/phase-69/index.html",
    "description": "Home Squidki Phase 69 Squidki Phase 69 583 votes Squidki Phase 69 is an ambitious and creative fa...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 14",
    "icon": "/images/new_mods/Sprunki Phase 14.png",
    "url": "https://wowtbc.net/sprunkin/phase-14/index.html",
    "description": "Home Squidki Phase 14 Squidki Phase 14 583 votes The Squidki Phase 14 Mod continues the eerie and...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spruncraft",
    "icon": "/images/new_mods/Sprunki Spruncraft.png",
    "url": "https://wowtbc.net/sprunkin/spruncraft/index.html",
    "description": "Home Squidki Spruncraft Squidki Spruncraft 583 votes The Squidki Spruncraft Mod is an exciting cr...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3: Cursed",
    "icon": "/images/new_mods/Sprunki Phase 3- Cursed.png",
    "url": "https://wowtbc.net/sprunkin/phase-3-cursed/index.html",
    "description": "Home Squidki Phase 3: Cursed Squidki Phase 3: Cursed 583 votes The Squidki Phase 3 Cursed Mod, al...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Susnki",
    "icon": "/images/new_mods/Sprunki Susnki.png",
    "url": "https://wowtbc.net/sprunkin/susnki/index.html",
    "description": "Home Squidki Susnki Squidki Susnki 583 votes The Squidki Susnki Mod is a delightful addition to t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pikadimady",
    "icon": "/images/new_mods/Sprunki Pikadimady.png",
    "url": "https://wowtbc.net/sprunkin/pikadimady/index.html",
    "description": "Home Squidki Pikadimady Squidki Pikadimady 583 votes The Squidki Pikadimady Mod is an exciting ad...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Skibidi Toilet 2.0",
    "icon": "/images/new_mods/Squidki- Skibidi Toilet 2.0.png",
    "url": "https://wowtbc.net/sprunkin/skibidi-toilet2/index.html",
    "description": "Home Squidki: Skibidi Toilet 2.0 Squidki: Skibidi Toilet 2.0 583 votes Squidki Skibidi Toilet 2 M...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Doors",
    "icon": "/images/new_mods/Sprunki But Doors.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-doors2/index.html",
    "description": "Home Squidki But Doors Squidki But Doors 583 votes Squidki Doors 2, also known as Squidki but Doo...",
    "type": "New Mods"
  },
  {
    "name": "Squidki V ???",
    "icon": "/images/new_mods/Sprunki V ---.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-v/index.html",
    "description": "Home Squidki V ??? Squidki V ??? 583 votes Squidki V Mod, also known as Squidki V ??? Horror Mod,...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 15",
    "icon": "/images/new_mods/Sprunki Phase 15.png",
    "url": "https://wowtbc.net/sprunkin/phase-15/index.html",
    "description": "Home Squidki Phase 15 Squidki Phase 15 583 votes Squidki Phase 15 Mod is the latest addition to t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Kiss Edition",
    "icon": "/images/new_mods/Sprunki Kiss Edition.png",
    "url": "https://wowtbc.net/sprunkin/sinner7/index.html?v=1.1",
    "description": "Home Squidki Kiss Edition Squidki Kiss Edition 583 votes The Squidki Kiss Edition Mod, also known...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Wired",
    "icon": "/images/new_mods/Sprunki But Wired.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-wired/index.html",
    "description": "Home Squidki But Wired Squidki But Wired 583 votes The Squidki But Wired Mod introduces a unique ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3 Babies",
    "icon": "/images/new_mods/Sprunki Phase 3 Babies.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase-3-babies/index.html",
    "description": "Home Squidki Phase 3 Babies Squidki Phase 3 Babies 583 votes The Squidki Phase 3 But Babies Mod r...",
    "type": "New Mods"
  },
  {
    "name": "Mr. Fun Computer Infection",
    "icon": "/images/new_mods/Mr. Fun Computer Infection.png",
    "url": "https://wowtbc.net/sprunkin/fun-computer-infection/index.html",
    "description": "Home Mr. Fun Computer Infection Mr. Fun Computer Infection 583 votes The Mr. Fun Computer Infecti...",
    "type": "New Mods"
  },
  {
    "name": "Squidki x FPE",
    "icon": "/images/new_mods/Sprunki x FPE.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-x-fpe/index.html",
    "description": "Home Squidki x FPE Squidki x FPE 583 votes The Squidki x FPE (Miss Bloomie) Mod is a vibrant and ...",
    "type": "New Mods"
  },
  {
    "name": "Spranke Cancelled Update",
    "icon": "/images/new_mods/Spranke Cancelled Update.png",
    "url": "https://wowtbc.net/sprunkin/spranke-cancelled/index.html",
    "description": "Home Spranke Cancelled Update Spranke Cancelled Update 583 votes The Spranke Cancelled Update Mod...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Bad But Custom",
    "icon": "/images/new_mods/Sprunki Bad But Custom.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-bad-but-custom/index.html",
    "description": "Home Squidki Bad But Custom Squidki Bad But Custom 583 votes The Squidki Bad but Custom Mod bring...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Cool As Ice 2",
    "icon": "/images/new_mods/Squidki- Cool As Ice 2.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-cool-as-ice/index.html",
    "description": "Home Squidki: Cool As Ice 2 Squidki: Cool As Ice 2 583 votes The Squidki Cool as Ice 2 Mod takes ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: In My Style",
    "icon": "/images/new_mods/Squidki- In My Style.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-in-my-style/index.html",
    "description": "Home Squidki: In My Style Squidki: In My Style 583 votes The Squidki in My Style Mod introduces a...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3: Padek Man",
    "icon": "/images/new_mods/Sprunki Phase 3- Padek Man.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-phase-3-padek-man/index.html",
    "description": "Home Squidki Phase 3: Padek Man Squidki Phase 3: Padek Man 583 votes The Squidki Phase 3 Padek Ma...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkus",
    "icon": "/images/new_mods/Sprunkus.png",
    "url": "https://wowtbc.net/sprunkin/sprunkus/index.html",
    "description": "Home Sprunkus Sprunkus 583 votes The Squidki Sprunkus Mod combines the iconic Incredibox Squidki ...",
    "type": "New Mods"
  },
  {
    "name": "Squidkistard Reupload",
    "icon": "/images/new_mods/Squidkistard Reupload.png",
    "url": "https://wowtbc.net/sprunkin/sprunkstard-reupload/index.html",
    "description": "Home Squidkistard Reupload Squidkistard Reupload 583 votes The Sprunkstard Reupload Mod is a crea...",
    "type": "New Mods"
  },
  {
    "name": "ObjectBox Sprunkstard",
    "icon": "/images/new_mods/ObjectBox Sprunkstard.png",
    "url": "https://wowtbc.net/sprunkin/objectbox-sprunkstard/index.html",
    "description": "Home ObjectBox Sprunkstard ObjectBox Sprunkstard 583 votes The ObjectBox Sprunkstard Squidki Mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Dandy’s",
    "icon": "/images/new_mods/Sprunki But Dandy’s.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-dandys/index.html",
    "description": "Home Squidki But Dandy’s Squidki But Dandy’s 583 votes The Squidki But Dandy’s Mod is an exciting...",
    "type": "New Mods"
  },
  {
    "name": "Squidki x BFDI",
    "icon": "/images/new_mods/Sprunki x BFDI.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-x-bfdi/index.html",
    "description": "Home Squidki x BFDI Squidki x BFDI 583 votes The Squidki x BFDI Mod, also known as Squidki Battle...",
    "type": "New Mods"
  },
  {
    "name": "Sprunkgerny",
    "icon": "/images/new_mods/Sprunkgerny.png",
    "url": "https://wowtbc.net/sprunkin/sprunkgerny/index.html",
    "description": "Home Sprunkgerny Sprunkgerny 583 votes The Squidki Sprunkgerny Mod reimagines the beloved Abgerny...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Reimagined",
    "icon": "/images/new_mods/Sprunki Reimagined.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-reimagined/index.html",
    "description": "Home Squidki Reimagined Squidki Reimagined 583 votes The Squidki REIMAGINED Mod breathes new life...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Outlineless",
    "icon": "/images/new_mods/Sprunki Outlineless.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-outlineless/index.html",
    "description": "Home Squidki Outlineless Squidki Outlineless 583 votes The Squidki Outlineless Mod offers a fresh...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Melodies",
    "icon": "/images/new_mods/Sprunki Melodies.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-melodies/index.html",
    "description": "Home Squidki Melodies Squidki Melodies 583 votes The Squidki Melodies Mod breathes new life into ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Underwater",
    "icon": "/images/new_mods/Sprunki Underwater.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-under-water/index.html",
    "description": "Home Squidki Underwater Squidki Underwater 583 votes The Squidki Underwater Mod takes players dee...",
    "type": "New Mods"
  },
  {
    "name": "Squidking",
    "icon": "/images/new_mods/Squidking.png",
    "url": "https://wowtbc.net/sprunkin/Squidking/index.html",
    "description": "Home Squidking Squidking 583 votes The Squidking Mod elevates the classic Incredibox Squidki expe...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Juegos Terror",
    "icon": "/images/new_mods/Squidki- Juegos Terror.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-juegos-terror/index.html",
    "description": "Home Squidki: Juegos Terror Squidki: Juegos Terror 583 votes The Squidki Juegos Terror Mod brings...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Cool",
    "icon": "/images/new_mods/Sprunki But Cool.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-cool/index.html",
    "description": "Home Squidki But Cool Squidki But Cool 583 votes The Squidki But Cool Mod, also known as Squidki ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Skibidi Remastered 2",
    "icon": "/images/new_mods/Squidki- Skibidi Remastered 2.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-skibidi-remastered/index.html",
    "description": "Home Squidki: Skibidi Remastered 2 Squidki: Skibidi Remastered 2 583 votes The Squidki Skibidi Re...",
    "type": "New Mods"
  },
  {
    "name": "FiddleBops",
    "icon": "/images/new_mods/FiddleBops.png",
    "url": "https://silkycell.github.io/FiddleBops/",
    "description": "Home FiddleBops FiddleBops 583 votes Welcome to FiddleBops, a fan-made project inspired by the be...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Pokemon",
    "icon": "/images/new_mods/Sprunked Pokemon.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-pokemon/index.html",
    "description": "Home Sprunked Pokemon Sprunked Pokemon 583 votes The Sprunked Pokémon Mod is an exciting and imag...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: But Black Cancelled",
    "icon": "/images/new_mods/Sprunki Retake- But Black Cancelled.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-black-cancel/index.html",
    "description": "Home Squidki Retake: But Black Cancelled Squidki Retake: But Black Cancelled 583 votes The Sprunk...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Steamed",
    "icon": "/images/new_mods/Sprunki Steamed.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-steamed/index.html",
    "description": "Home Squidki Steamed Squidki Steamed 583 votes The Squidki Steamed Mod takes the creativity of In...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked But Bit Better",
    "icon": "/images/new_mods/Sprunked But Bit Better.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-but-bit-better/index.html",
    "description": "Home Sprunked But Bit Better Sprunked But Bit Better 583 votes The Sprunked But Bit Better Mod is...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Robot",
    "icon": "/images/new_mods/Sprunki Robot.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-robot/index.html",
    "description": "Home Squidki Robot Squidki Robot 583 votes The Squidki Robot Mod takes the creative and musical w...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Like Minecraft",
    "icon": "/images/new_mods/Sprunki Like Minecraft.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-like-minecraft/index.html",
    "description": "Home Squidki Like Minecraft Squidki Like Minecraft 583 votes The Squidki Like Minecraft Mod is a ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sonic",
    "icon": "/images/new_mods/Sprunki Sonic.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-sonic/index.html",
    "description": "Home Squidki Sonic Squidki Sonic 583 votes The Squidki Sonic Mod is a vibrant and entertaining ad...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Bambilairity",
    "icon": "/images/new_mods/Sprunki Bambilairity.png",
    "url": "https://wowtbc.net/sprunkin/bambilairity/index.html",
    "description": "Home Squidki Bambilairity Squidki Bambilairity 583 votes The Squidki Bambilairity Mod brings a th...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sinner Edition",
    "icon": "/images/new_mods/Sprunki Sinner Edition.png",
    "url": "https://wowtbc.net/sprunkin/sinner7/index.html",
    "description": "Home Squidki Sinner Edition Squidki Sinner Edition 583 votes The Squidki Sinner Edition Mod, also...",
    "type": "New Mods"
  },
  {
    "name": "Squidki SUS",
    "icon": "/images/new_mods/Sprunki SUS.png",
    "url": "https://wowtbc.net/sprunkin/sinner7/index.html",
    "description": "Home Squidki SUS Squidki SUS 583 votes Step into the ultimate music revolution with the SquidkiSA...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Amoung Us",
    "icon": "/images/new_mods/Squidki- Amoung Us.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-amoung-us/index.html",
    "description": "Home Squidki: Amoung Us Squidki: Amoung Us 583 votes The Incredibox Squidki Among Us Mod creative...",
    "type": "New Mods"
  },
  {
    "name": "Abgerny Baggerhead",
    "icon": "/images/new_mods/Abgerny Baggerhead.png",
    "url": "https://wowtbc.net/sprunkin/abgerny-baggerhead/index.html",
    "description": "Home Abgerny Baggerhead Abgerny Baggerhead 583 votes The Incredibox Squidki Abgerny Baggerhead Mo...",
    "type": "New Mods"
  },
  {
    "name": "SquidkioPhobia",
    "icon": "/images/new_mods/SquidkioPhobia.png",
    "url": "https://wowtbc.net/sprunkin/Squidkiophobia/index.html",
    "description": "Home SquidkioPhobia SquidkioPhobia 583 votes The Incredibox Squidki Squidkiophobia Mod is a chill...",
    "type": "New Mods"
  },
  {
    "name": "Abgerny But Overlap",
    "icon": "/images/new_mods/Abgerny But Overlap.png",
    "url": "https://wowtbc.net/sprunkin/abgerny-overlap/index.html",
    "description": "Home Abgerny But Overlap Abgerny But Overlap 583 votes The Incredibox Squidki Abgerny but Overlap...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Babies",
    "icon": "/images/new_mods/Sprunki Retake- Babies.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake-babies/index.html",
    "description": "Home Squidki Retake: Babies Squidki Retake: Babies 583 votes Incredibox Squidki Retake Babies gam...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Hyperblast",
    "icon": "/images/new_mods/Sprunki Hyperblast.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-hyperblast/index.html",
    "description": "Home Squidki Hyperblast Squidki Hyperblast 583 votes Squidki Hyperblast Mod brings a vibrant and ...",
    "type": "New Mods"
  },
  {
    "name": "Padek Man: Sprunkstard",
    "icon": "/images/new_mods/Padek Man- Sprunkstard.png",
    "url": "https://wowtbc.net/sprunkin/padekman-sprunkstard/index.html",
    "description": "Home Padek Man: Sprunkstard Padek Man: Sprunkstard 583 votes Padek Man Sprunkstard Mod is an inno...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Better",
    "icon": "/images/new_mods/Sprunki But Better.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-better/index.html",
    "description": "Home Squidki But Better Squidki But Better 583 votes Squidki But Better Mod is a refined and enha...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake 2.0",
    "icon": "/images/new_mods/Sprunki Retake 2.0.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-retake2/index.html",
    "description": "Home Squidki Retake 2.0 Squidki Retake 2.0 583 votes Squidki Retake 2.0 Mod is the much-anticipat...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Sprunker",
    "icon": "/images/new_mods/Squidki- Sprunker.png",
    "url": "https://wowtbc.net/sprunkin/sprunker/index.html",
    "description": "Home Squidki: Sprunker Squidki: Sprunker 583 votes Squidki Sprunker Mod is a creative and humorou...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Abstracted",
    "icon": "/images/new_mods/Sprunki Abstracted.png",
    "url": "https://wowtbc.net/sprunkin/abstracted/index.html",
    "description": "Home Squidki Abstracted Squidki Abstracted 583 votes Squidki Abstracted Mod is a fascinating and ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki x Fetereder",
    "icon": "/images/new_mods/Sprunki x Fetereder.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-x-fetereder/index.html",
    "description": "Home Squidki x Fetereder Squidki x Fetereder 583 votes Squidki x Fetereder Mod is a creative and ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Night Mode",
    "icon": "/images/new_mods/Sprunki Retake- Night Mode.png",
    "url": "https://wowtbc.net/sprunkin/retake-night-mode/index.html",
    "description": "Home Squidki Retake: Night Mode Squidki Retake: Night Mode 583 votes Squidki Retake Night Mode of...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Rejoyed",
    "icon": "/images/new_mods/Sprunki Rejoyed.png",
    "url": "https://wowtbc.net/sprunkin/rejoyed/index.html",
    "description": "Home Squidki Rejoyed Squidki Rejoyed 583 votes The Squidki Rejoyed Mod is a creative and interact...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Crack Edition",
    "icon": "/images/new_mods/Squidki- Crack Edition.png",
    "url": "https://wowtbc.net/sprunkin/crack-edition/index.html",
    "description": "Home Squidki: Crack Edition Squidki: Crack Edition 583 votes Squidki Crack Edition Mod takes the ...",
    "type": "New Mods"
  },
  {
    "name": "Sperunky",
    "icon": "/images/new_mods/Sperunky.png",
    "url": "https://wowtbc.net/sprunkin/sperunky4/index.html",
    "description": "Home Sperunky Sperunky 583 votes Sperunky Mod is an inventive and engaging addition to the world ...",
    "type": "New Mods"
  },
  {
    "name": "Dandy’s Squidki",
    "icon": "/images/new_mods/Dandy’s Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/dandy-Squidki/index.html",
    "description": "Home Dandy’s Squidki Dandy’s Squidki 583 votes Dandy’s Squidki Mod is an exciting fan-made creati...",
    "type": "New Mods"
  },
  {
    "name": "Squidkin",
    "icon": "/images/new_mods/Squidkin.png",
    "url": "https://wowtbc.net/sprunkin/Squidkin/index.html",
    "description": "Home Squidkin Squidkin 583 votes The Squidkin Mod is a unique and imaginative adaptation inspired...",
    "type": "New Mods"
  },
  {
    "name": "Squidkion Sauce",
    "icon": "/images/new_mods/Squidkion Sauce.png",
    "url": "https://wowtbc.net/sprunkin/Squidkion-sauce/index.html",
    "description": "Home Squidkion Sauce Squidkion Sauce 583 votes The Incredibox Squidki Squidkion Sauce Mod is a cr...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Mustard Remake",
    "icon": "/images/new_mods/Squidki- Mustard Remake.png",
    "url": "https://wowtbc.net/sprunkin/mustard-remake/index.html",
    "description": "Home Squidki: Mustard Remake Squidki: Mustard Remake 583 votes The Incredibox Squidki Mustard Rem...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Candi Retake",
    "icon": "/images/new_mods/Squidki- Candi Retake.png",
    "url": "https://wowtbc.net/sprunkin/candi-retake/index.html",
    "description": "Home Squidki: Candi Retake Squidki: Candi Retake 583 votes The Incredibox Squidki Candi Retake Mo...",
    "type": "New Mods"
  },
  {
    "name": "Kino Sprunked",
    "icon": "/images/new_mods/Kino Sprunked.png",
    "url": "https://wowtbc.net/sprunkin/kino-sprunked/index.html",
    "description": "Home Kino Sprunked Kino Sprunked 583 votes Kino Sprunked Mod is an inventive and captivating addi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 13",
    "icon": "/images/new_mods/Sprunki Phase 13.png",
    "url": "https://wowtbc.net/sprunkin/phase13/index.html",
    "description": "Home Squidki Phase 13 Squidki Phase 13 583 votes Squidki Phase 13 Mod is the latest thrilling add...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 12",
    "icon": "/images/new_mods/Sprunki Phase 12.png",
    "url": "https://wowtbc.net/sprunkin/phase12/index.html",
    "description": "Home Squidki Phase 12 Squidki Phase 12 583 votes Squidki Phase 12 takes the beloved Squidki Incre...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 11",
    "icon": "/images/new_mods/Sprunki Phase 11.png",
    "url": "https://wowtbc.net/sprunkin/phase11/index.html",
    "description": "Home Squidki Phase 11 Squidki Phase 11 583 votes Squidki Phase 11 is the latest installment in th...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Save",
    "icon": "/images/new_mods/Sprunki Save.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-save/index.html",
    "description": "Home Squidki Save Squidki Save 583 votes The Squidki Save Mod introduces a unique twist to the In...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Hysteria",
    "icon": "/images/new_mods/Sprunki Hysteria.png",
    "url": "https://wowtbc.net/sprunkin/hysteria/index.html",
    "description": "Home Squidki Hysteria Squidki Hysteria 583 votes The Squidki Hysteria Mod plunges players into a ...",
    "type": "New Mods"
  },
  {
    "name": "Abgerny Gyatt Burger",
    "icon": "/images/new_mods/Abgerny Gyatt Burger.png",
    "url": "https://wowtbc.net/sprunkin/abgerny-gyatt-burger/index.html",
    "description": "Home Abgerny Gyatt Burger Abgerny Gyatt Burger 583 votes The Squidki Abgerny Gyatt Burger Mod is ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Overlap the Characters",
    "icon": "/images/new_mods/Sprunki Overlap the Characters.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-overlap/index.html",
    "description": "Home Squidki Overlap the Characters Squidki Overlap the Characters 583 votes The Squidki Overlap ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Better Animations",
    "icon": "/images/new_mods/Sprunki But Better Animations.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-better-animations/index.html",
    "description": "Home Squidki But Better Animations Squidki But Better Animations 583 votes The Squidki But Better...",
    "type": "New Mods"
  },
  {
    "name": "Squidkilairity",
    "icon": "/images/new_mods/Squidkilairity.png",
    "url": "https://wowtbc.net/sprunkin/Squidkilairity/index.html",
    "description": "Home Squidkilairity Squidkilairity 583 votes The Squidkilairity Mod, also referred to as Squidki ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Imsusmi",
    "icon": "/images/new_mods/Sprunki Imsusmi.png",
    "url": "https://wowtbc.net/sprunkin/imsusmi/index.html",
    "description": "Home Squidki Imsusmi Squidki Imsusmi 583 votes The Squidki Imsusmi Mod, also called Opeset Sprunk...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spronked",
    "icon": "/images/new_mods/Sprunki Spronked.png",
    "url": "https://wowtbc.net/sprunkin/spronked/index.html",
    "description": "Home Squidki Spronked Squidki Spronked 583 votes The Squidki Spronked Mod is a creative take on t...",
    "type": "New Mods"
  },
  {
    "name": "Abgerny But Ruined",
    "icon": "/images/new_mods/Abgerny But Ruined.png",
    "url": "https://wowtbc.net/sprunkin/abgerny-ruined/index.html",
    "description": "Home Abgerny But Ruined Abgerny But Ruined 583 votes The Squidki Abgerny But Ruined Mod takes the...",
    "type": "New Mods"
  },
  {
    "name": "Abgerny But Polos",
    "icon": "/images/new_mods/Abgerny But Polos.png",
    "url": "https://wowtbc.net/sprunkin/abgerny-but-polos/index.html",
    "description": "Home Abgerny But Polos Abgerny But Polos 583 votes The Squidki Abgerny But Polos Mod is a refresh...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Abgerny Objectbox",
    "icon": "/images/new_mods/Squidki- Abgerny Objectbox.png",
    "url": "https://wowtbc.net/sprunkin/objectbox-abgerny/index.html",
    "description": "Home Squidki: Abgerny Objectbox Squidki: Abgerny Objectbox 583 votes The Squidki Abgerny Objectbo...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Garten of Banban Reskin",
    "icon": "/images/new_mods/Squidki- Garten of Banban Reskin.png",
    "url": "https://wowtbc.net/sprunkin/garten-banban-reskin/index.html",
    "description": "Home Squidki: Garten of Banban Reskin Squidki: Garten of Banban Reskin 583 votes Garten of Banban...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Skibidi Remastered",
    "icon": "/images/new_mods/Squidki- Skibidi Remastered.png",
    "url": "https://wowtbc.net/sprunkin/skibidi-remastered/index.html",
    "description": "Home Squidki: Skibidi Remastered Squidki: Skibidi Remastered 583 votes Squidki Skibidi Remastered...",
    "type": "New Mods"
  },
  {
    "name": "Banana Squidkis",
    "icon": "/images/new_mods/Banana Squidkis.png",
    "url": "https://wowtbc.net/sprunkin/banana-Squidkis/index.html",
    "description": "Home Banana Squidkis Banana Squidkis 583 votes Banana Squidkis Mod is a lighthearted and whimsica...",
    "type": "New Mods"
  },
  {
    "name": "Squidkify",
    "icon": "/images/new_mods/Squidkify.png",
    "url": "https://wowtbc.net/sprunkin/Squidkify/index.html",
    "description": "Home Squidkify Squidkify 583 votes The Squidkify Mod is a creative take inspired by the well-love...",
    "type": "New Mods"
  },
  {
    "name": "Abgerny But Squidki",
    "icon": "/images/new_mods/Abgerny But Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/abgerny-but-Squidki/index.html",
    "description": "Home Abgerny But Squidki Abgerny But Squidki 583 votes The Abgerny but Squidki Mod brings a refre...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sproinky",
    "icon": "/images/new_mods/Sprunki Sproinky.png",
    "url": "https://wowtbc.net/sprunkin/sproinky/index.html",
    "description": "Home Squidki Sproinky Squidki Sproinky 583 votes The Squidki Sproinky Mod is a creative and Roblo...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Undertale",
    "icon": "/images/new_mods/Sprunki Undertale.png",
    "url": "https://wowtbc.net/sprunkin/undertale/index.html",
    "description": "Home Squidki Undertale Squidki Undertale 583 votes The Squidki Undertale Mod brings the iconic an...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Trunkey",
    "icon": "/images/new_mods/Sprunki Trunkey.png",
    "url": "https://wowtbc.net/sprunkin/trunkey/index.html",
    "description": "Home Squidki Trunkey Squidki Trunkey 583 votes The Squidki Trunkey Mod brings a unique twist to t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Mayonnaise Version",
    "icon": "/images/new_mods/Squidki- Mayonnaise Version.png",
    "url": "https://wowtbc.net/sprunkin/mayonnaisa-version/index.html",
    "description": "Home Squidki: Mayonnaise Version Squidki: Mayonnaise Version 583 votes Squidki Mayonnaise Version...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Dash",
    "icon": "/images/new_mods/Sprunki Dash.png",
    "url": "https://wowtbc.net/sprunkin/dash/index.html",
    "description": "Home Squidki Dash Squidki Dash 583 votes Squidki Dash Mod brings an exciting twist to the Squidki...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake: Kids Friendly",
    "icon": "/images/new_mods/Sprunki Retake- Kids Friendly.png",
    "url": "https://wowtbc.net/sprunkin/retake-kids-friendly/index.html",
    "description": "Home Squidki Retake: Kids Friendly Squidki Retake: Kids Friendly 583 votes The Squidki Retake Kid...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Stardust Speedway",
    "icon": "/images/new_mods/Squidki- Stardust Speedway.png",
    "url": "https://wowtbc.net/sprunkin/stardust-speedway/index.html",
    "description": "Home Squidki: Stardust Speedway Squidki: Stardust Speedway 583 votes The Squidki Stardust Speedwa...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Boring Edition",
    "icon": "/images/new_mods/Squidki- Boring Edition.png",
    "url": "https://wowtbc.net/sprunkin/boring-edition/index.html",
    "description": "Home Squidki: Boring Edition Squidki: Boring Edition 583 votes The Squidki Boring Edition Mod tak...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Night Time Modded",
    "icon": "/images/new_mods/Squidki- Night Time Modded.png",
    "url": "https://wowtbc.net/sprunkin/night-modded/index.html",
    "description": "Home Squidki: Night Time Modded Squidki: Night Time Modded 583 votes The Incredibox Squidki Night...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked x Squidki",
    "icon": "/images/new_mods/Sprunked x Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-x-Squidki/index.html",
    "description": "Home Sprunked x Squidki Sprunked x Squidki 583 votes The Incredibox Sprunked x Squidki game combi...",
    "type": "New Mods"
  },
  {
    "name": "Scranky Reskin",
    "icon": "/images/new_mods/Scranky Reskin.png",
    "url": "https://wowtbc.net/sprunkin/scranky-reskin/index.html",
    "description": "Home Scranky Reskin Scranky Reskin 583 votes The Scranky Reskin Mod is a visually engaging reimag...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Black Lines",
    "icon": "/images/new_mods/Sprunki But Black Lines.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-but-black-lines/index.html",
    "description": "Home Squidki But Black Lines Squidki But Black Lines 583 votes The Squidki But Black Lines Mod br...",
    "type": "New Mods"
  },
  {
    "name": "Spranke",
    "icon": "/images/new_mods/Spranke.png",
    "url": "https://wowtbc.net/sprunkin/spranke/index.html",
    "description": "Home Spranke Spranke 583 votes The Spranke Mod is a fan-made addition to the Incredibox Squidki u...",
    "type": "New Mods"
  },
  {
    "name": "Sprunk 1.0",
    "icon": "/images/new_mods/Sprunk 1.0.png",
    "url": "https://wowtbc.net/sprunkin/sprunk1/index.html",
    "description": "Home Sprunk 1.0 Sprunk 1.0 583 votes The Sprunk 1.0 Mod is a visually stunning addition to the In...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 10",
    "icon": "/images/new_mods/Sprunki Phase 10.png",
    "url": "https://wowtbc.net/sprunkin/phase10/index.html",
    "description": "Home Squidki Phase 10 Squidki Phase 10 583 votes The Incredibox Squidki Phase 10 Mod is the ultim...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 9",
    "icon": "/images/new_mods/Sprunki Phase 9.png",
    "url": "https://wowtbc.net/sprunkin/phase9/index.html",
    "description": "Home Squidki Phase 9 Squidki Phase 9 583 votes The Incredibox Squidki Phase 9 Mod takes the Sprun...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked But More Accurate",
    "icon": "/images/new_mods/Sprunked But More Accurate.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-more-accurate/index.html",
    "description": "Home Sprunked But More Accurate Sprunked But More Accurate 583 votes The Sprunked but More Accura...",
    "type": "New Mods"
  },
  {
    "name": "Squidkini",
    "icon": "/images/new_mods/Squidkini.png",
    "url": "https://wowtbc.net/sprunkin/Squidkini1/index.html",
    "description": "Home Squidkini Squidkini 583 votes The Squidkini Mod is a unique twist on the Incredibox universe...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Green Gang",
    "icon": "/images/new_mods/Sprunki Green Gang.png",
    "url": "https://wowtbc.net/sprunkin/greengang/index.html",
    "description": "Home Squidki Green Gang Squidki Green Gang 583 votes The Squidki Green Gang Mod brings a fresh an...",
    "type": "New Mods"
  },
  {
    "name": "Derple Phase 2",
    "icon": "/images/new_mods/Derple Phase 2.png",
    "url": "https://wowtbc.net/sprunkin/durple-phase2/index.html",
    "description": "Home Derple Phase 2 Derple Phase 2 583 votes The Squidki Derple Phase 2 Mod is an imaginative ext...",
    "type": "New Mods"
  },
  {
    "name": "Squidki More Slots",
    "icon": "/images/new_mods/Sprunki More Slots.png",
    "url": "https://wowtbc.net/sprunkin/many-slots/index.html",
    "description": "Home Squidki More Slots Squidki More Slots 583 votes The Squidki with More Slots Mod adds an exci...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Archive 2.0",
    "icon": "/images/new_mods/Sprunki Archive 2.0.png",
    "url": "https://wowtbc.net/sprunkin/archive2/index.html",
    "description": "Home Squidki Archive 2.0 Squidki Archive 2.0 583 votes Squidki Archive 2.0 Mod is a captivating s...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Piggy",
    "icon": "/images/new_mods/Sprunki Piggy.png",
    "url": "https://wowtbc.net/sprunkin/piggy/index.html",
    "description": "Home Squidki Piggy Squidki Piggy 583 votes Squidki Piggy Mod is a playful twist on the Incredibox...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sbrudki",
    "icon": "/images/new_mods/Sprunki Sbrudki.png",
    "url": "https://wowtbc.net/sprunkin/sbrudki/index.html",
    "description": "Home Squidki Sbrudki Squidki Sbrudki 583 votes Squidki Sbrudki Mod is a fun and quirky twist on t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Girls with Hair",
    "icon": "/images/new_mods/Sprunki Girls with Hair.png",
    "url": "https://wowtbc.net/sprunkin/girl-with-hair/index.html",
    "description": "Home Squidki Girls with Hair Squidki Girls with Hair 583 votes Squidki Girls With Hair Mod introd...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pinki Bowified",
    "icon": "/images/new_mods/Sprunki Pinki Bowified.png",
    "url": "https://wowtbc.net/sprunkin/pinki-bowified/index.html",
    "description": "Home Squidki Pinki Bowified Squidki Pinki Bowified 583 votes Squidki Pinki Bowified Mod is a char...",
    "type": "New Mods"
  },
  {
    "name": "ParaSquidki 10.0",
    "icon": "/images/new_mods/ParaSquidki 10.0.png",
    "url": "https://wowtbc.net/sprunkin/paraSquidki09/index.html",
    "description": "Home ParaSquidki 10.0 ParaSquidki 10.0 583 votes ParaSquidki 10.0 Mod is the latest update in the...",
    "type": "New Mods"
  },
  {
    "name": "FNF: Mr. Fun Computer Test",
    "icon": "/images/new_mods/FNF- Mr. Fun Computer Test.png",
    "url": "https://wowtbc.net/sprunkin/fnf-fun-computer/index.html",
    "description": "Home FNF: Mr. Fun Computer Test FNF: Mr. Fun Computer Test 583 votes Mr. Fun Computer FNF Test is...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Mastered",
    "icon": "/images/new_mods/Sprunki Mastered.png",
    "url": "https://wowtbc.net/sprunkin/mastered/index.html",
    "description": "Home Squidki Mastered Squidki Mastered 583 votes Squidki Mastered Mod is an enhanced take on the ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprungo",
    "icon": "/images/new_mods/Sprunki Sprungo.png",
    "url": "https://wowtbc.net/sprunkin/sprungo/index.html",
    "description": "Home Squidki Sprungo Squidki Sprungo 583 votes Squidki SprunGo Mod brings a fresh twist to the In...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Universe 1",
    "icon": "/images/new_mods/Sprunki Universe 1.png",
    "url": "https://wowtbc.net/sprunkin/universe/index.html",
    "description": "Home Squidki Universe 1 Squidki Universe 1 583 votes Squidki Universe Mod is an exciting addition...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake Crossword",
    "icon": "/images/new_mods/Sprunki Retake Crossword.png",
    "url": "https://wowtbc.net/sprunkin/crossword-retake/index.html",
    "description": "Home Squidki Retake Crossword Squidki Retake Crossword 583 votes Squidki Crossword Retake Mod bri...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked 2.0",
    "icon": "/images/new_mods/Sprunked 2.0.png",
    "url": "https://wowtbc.net/sprunkin/sprunked2/index.html",
    "description": "Home Sprunked 2.0 Sprunked 2.0 583 votes Squidki Sprunked 2.0 Mod is an enhanced version of the b...",
    "type": "New Mods"
  },
  {
    "name": "Squidki CoolFox Pro",
    "icon": "/images/new_mods/Sprunki CoolFox Pro.png",
    "url": "https://wowtbc.net/sprunkin/coolflexpro/index.html",
    "description": "Home Squidki CoolFox Pro Squidki CoolFox Pro 583 votes Squidki CoolFox Pro Mod takes the Incredib...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Pokemon",
    "icon": "/images/new_mods/Sprunki Pokemon.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-pokemon/index.html",
    "description": "Home Squidki Pokemon Squidki Pokemon 583 votes Squidki Pokémon Mod brings the exciting world of P...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked Scratch Ver.",
    "icon": "/images/new_mods/Sprunked Scratch Ver..png",
    "url": "https://wowtbc.net/sprunkin/sprunked-scratch/index.html",
    "description": "Home Sprunked Scratch Ver. Sprunked Scratch Ver. 583 votes Sprunked Scratch Mod elevates the Spru...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Remake Fire",
    "icon": "/images/new_mods/Sprunki Remake Fire.png",
    "url": "https://wowtbc.net/sprunkin/sprunked-retake-fire/index.html",
    "description": "Home Squidki Remake Fire Squidki Remake Fire 583 votes Sprunked Remake Fire Mod brings a new leve...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Cure",
    "icon": "/images/new_mods/Sprunki Cure.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-cure-ver/index.html",
    "description": "Home Squidki Cure Squidki Cure 583 votes The Squidki Cure Version Mod adds an intriguing twist to...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Banana Edition",
    "icon": "/images/new_mods/Squidki- Banana Edition.png",
    "url": "https://wowtbc.net/sprunkin/banana-edition/index.html",
    "description": "Home Squidki: Banana Edition Squidki: Banana Edition 583 votes The Squidki Banana Edition Mod bri...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Mustard [Sprunkstard]",
    "icon": "/images/new_mods/Sprunki Mustard [Sprunkstard].png",
    "url": "https://wowtbc.net/sprunkin/sprunkstardtest/index.html",
    "description": "Home Squidki Mustard [Sprunkstard] Squidki Mustard [Sprunkstard] 583 votes The Squidki Mustard Mo...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Scratch",
    "icon": "/images/new_mods/Sprunki Scratch.png",
    "url": "https://wowtbc.net/sprunkin/scratch-mod/index.html",
    "description": "Home Squidki Scratch Squidki Scratch 583 votes The Squidki Scratch Mod is an innovative twist on ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki x Melophobia",
    "icon": "/images/new_mods/Sprunki x Melophobia.png",
    "url": "https://wowtbc.net/sprunkin/melophobia/index.html",
    "description": "Home Squidki x Melophobia Squidki x Melophobia 583 votes The Squidki x Melophobia Mod is an inten...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: The Lost Day",
    "icon": "/images/new_mods/Squidki- The Lost Day.png",
    "url": "https://wowtbc.net/sprunkin/lost-file-v2/index.html",
    "description": "Home Squidki: The Lost Day Squidki: The Lost Day 583 votes The Squidki The Lost Day Mod takes pla...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Rotrizi",
    "icon": "/images/new_mods/Sprunki Rotrizi.png",
    "url": "https://wowtbc.net/sprunkin/rotrizi/index.html",
    "description": "Home Squidki Rotrizi Squidki Rotrizi 583 votes The Squidki Rotrizi Mod is an exciting fan-made tw...",
    "type": "New Mods"
  },
  {
    "name": "Squidki GreenCore",
    "icon": "/images/new_mods/Sprunki GreenCore.png",
    "url": "https://wowtbc.net/sprunkin/greencore2/index.html",
    "description": "Home Squidki GreenCore Squidki GreenCore 583 votes The Squidki Greencore Mod brings a fresh, natu...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Death Near",
    "icon": "/images/new_mods/Sprunki Death Near.png",
    "url": "https://wowtbc.net/sprunkin/death-is-near/index.html",
    "description": "Home Squidki Death Near Squidki Death Near 583 votes The Squidki Death is Near Mod by Leoplushtv ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki RALR",
    "icon": "/images/new_mods/Sprunki RALR.png",
    "url": "https://wowtbc.net/sprunkin/ralr/index.html",
    "description": "Home Squidki RALR Squidki RALR 583 votes The Squidki Ralr Mod is a creative twist on the Incredib...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Trevor",
    "icon": "/images/new_mods/Sprunki Trevor.png",
    "url": "https://wowtbc.net/sprunkin/trevor/index.html",
    "description": "Home Squidki Trevor Squidki Trevor 583 votes Squidki Trevor Mod introduces a playful twist to the...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Remastered 3.0",
    "icon": "/images/new_mods/Sprunki Remastered 3.0.png",
    "url": "https://wowtbc.net/sprunkin/remastered3/index.html",
    "description": "Home Squidki Remastered 3.0 Squidki Remastered 3.0 583 votes Squidki Remastered 3.0 Mod takes the...",
    "type": "New Mods"
  },
  {
    "name": "Squidki X Orin Ayo",
    "icon": "/images/new_mods/Sprunki X Orin Ayo.png",
    "url": "https://wowtbc.net/sprunkin/orin-ayo/index.html",
    "description": "Home Squidki X Orin Ayo Squidki X Orin Ayo 583 votes Squidki X Orin Ayo Mod is an imaginative twi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Terror Forms",
    "icon": "/images/new_mods/Sprunki Terror Forms.png",
    "url": "https://wowtbc.net/sprunkin/terror-forms/index.html",
    "description": "Home Squidki Terror Forms Squidki Terror Forms 583 votes Squidki Terror Forms Mod takes the origi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki FNAF 4",
    "icon": "/images/new_mods/Sprunki FNAF 4.png",
    "url": "https://wowtbc.net/sprunkin/fnaf4/index.html",
    "description": "Home Squidki FNAF 4 Squidki FNAF 4 583 votes Squidki FNAF 4 Mod is a chilling crossover between I...",
    "type": "New Mods"
  },
  {
    "name": "Random Sprunked",
    "icon": "/images/new_mods/Random Sprunked.png",
    "url": "https://wowtbc.net/sprunkin/random-sprunked/index.html",
    "description": "Home Random Sprunked Random Sprunked 583 votes Random Sprunked Mod is an unpredictable and thrill...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Interactive",
    "icon": "/images/new_mods/Sprunki Interactive.png",
    "url": "https://wowtbc.net/sprunkin/interactive/index.html",
    "description": "Home Squidki Interactive Squidki Interactive 583 votes Squidki Interactive is an engaging twist o...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Mustard v2",
    "icon": "/images/new_mods/Sprunki Mustard v2.png",
    "url": "https://wowtbc.net/sprunkin/mustardv2/index.html",
    "description": "Home Squidki Mustard v2 Squidki Mustard v2 583 votes Squidki Mustard Mod brings a vibrant twist t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Katchup",
    "icon": "/images/new_mods/Sprunki Katchup.png",
    "url": "https://wowtbc.net/sprunkin/katchup/index.html",
    "description": "Home Squidki Katchup Squidki Katchup 583 votes Squidki Katchup Mod is a vibrant and eerie twist o...",
    "type": "New Mods"
  },
  {
    "name": "Squidki International",
    "icon": "/images/new_mods/Sprunki International.png",
    "url": "https://wowtbc.net/sprunkin/international/index.html",
    "description": "Home Squidki International Squidki International 583 votes Squidki International Mod is an exciti...",
    "type": "New Mods"
  },
  {
    "name": "Squidki OC Revamped",
    "icon": "/images/new_mods/Sprunki OC Revamped.png",
    "url": "https://wowtbc.net/sprunkin/oc-revamped/index.html",
    "description": "Home Squidki OC Revamped Squidki OC Revamped 583 votes Squidki OC Revamped Mod is a dynamic updat...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Bob Squarepants",
    "icon": "/images/new_mods/Sprunki Bob Squarepants.png",
    "url": "https://wowtbc.net/sprunkin/bob-squarepants/index.html",
    "description": "Home Squidki Bob Squarepants Squidki Bob Squarepants 583 votes Squidki Bob Squarepants Mod is a q...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Modded 3.0",
    "icon": "/images/new_mods/Sprunki Modded 3.0.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-modded3/index.html",
    "description": "Home Squidki Modded 3.0 Squidki Modded 3.0 583 votes Squidki Modded 3 Mod brings a fresh twist to...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Lunacy",
    "icon": "/images/new_mods/Sprunki Lunacy.png",
    "url": "https://wowtbc.net/sprunkin/lunacy/index.html",
    "description": "Home Squidki Lunacy Squidki Lunacy 583 votes The Squidki Lunacy: Baneimations’s Mod is a thrillin...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Ugly Runined",
    "icon": "/images/new_mods/Sprunki Ugly Runined.png",
    "url": "https://wowtbc.net/sprunkin/ugly-runined/index.html",
    "description": "Home Squidki Ugly Runined Squidki Ugly Runined 583 votes The Squidki But Ugly Ruined Mod is a pla...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But i Made it",
    "icon": "/images/new_mods/Sprunki But i Made it.png",
    "url": "https://wowtbc.net/sprunkin/but-i-made-it/index.html",
    "description": "Home Squidki But i Made it Squidki But i Made it 583 votes The Squidki But I Made It Mod is a fan...",
    "type": "New Mods"
  },
  {
    "name": "Squidki CountryBox",
    "icon": "/images/new_mods/Sprunki CountryBox.png",
    "url": "https://wowtbc.net/sprunkin/countrybox/index.html",
    "description": "Home Squidki CountryBox Squidki CountryBox 583 votes The Incredibox Squidki Countrybox Mod combin...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Bumble Bee",
    "icon": "/images/new_mods/Sprunki Bumble Bee.png",
    "url": "https://wowtbc.net/sprunkin/bumble-bee/index.html",
    "description": "Home Squidki Bumble Bee Squidki Bumble Bee 583 votes The Incredibox Squidki Bumble Bee Mod offers...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Trollges",
    "icon": "/images/new_mods/Sprunki Trollges.png",
    "url": "https://wowtbc.net/sprunkin/trollges2/index.html",
    "description": "Home Squidki Trollges Squidki Trollges 583 votes The Incredibox Squidki Trollges Mod takes the cl...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Burned Down",
    "icon": "/images/new_mods/Sprunki Burned Down.png",
    "url": "https://wowtbc.net/sprunkin/burned-down/index.html",
    "description": "Home Squidki Burned Down Squidki Burned Down 583 votes The Squidki BUT They Are Burned Down Mod i...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Scarier",
    "icon": "/images/new_mods/Sprunki Scarier.png",
    "url": "https://wowtbc.net/sprunkin/scarier/index.html",
    "description": "Home Squidki Scarier Squidki Scarier 583 votes The Squidki Scarier Mod takes the classic Incredib...",
    "type": "New Mods"
  },
  {
    "name": "Cool As Ice",
    "icon": "/images/new_mods/Cool As Ice.png",
    "url": "https://wowtbc.net/sprunkin/cool-as-ice/index.html",
    "description": "Home Cool As Ice Cool As Ice 583 votes The Incredibox Cool as Ice Mod puts a chilly spin on the c...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Infection",
    "icon": "/images/new_mods/Sprunki Infection.png",
    "url": "https://wowtbc.net/sprunkin/infection/index.html",
    "description": "Home Squidki Infection Squidki Infection 583 votes The Squidki Infection Mod brings a chilling ne...",
    "type": "New Mods"
  },
  {
    "name": "Squidkigenics!",
    "icon": "/images/new_mods/Squidkigenics!.png",
    "url": "https://wowtbc.net/sprunkin/Squidkigenics1/index.html",
    "description": "Home Squidkigenics! Squidkigenics! 583 votes The Squidkigenics! Squidki Mod is an exciting twist ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki OCs Life Work",
    "icon": "/images/new_mods/Sprunki OCs Life Work.png",
    "url": "https://wowtbc.net/sprunkin/ocs-life-work/index.html",
    "description": "Home Squidki OCs Life Work Squidki OCs Life Work 583 votes The Squidki OCs Life Work Mod is a pla...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 8",
    "icon": "/images/new_mods/Sprunki Phase 8.png",
    "url": "https://wowtbc.net/sprunkin/phase8/index.html",
    "description": "Home Squidki Phase 8 Squidki Phase 8 583 votes The Incredibox Squidki Phase 8 Mod introduces a ca...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Fall Edition",
    "icon": "/images/new_mods/Squidki- Fall Edition.png",
    "url": "https://wowtbc.net/sprunkin/fall-edition/index.html",
    "description": "Home Squidki: Fall Edition Squidki: Fall Edition 583 votes The Incredibox Squidki Fall Edition ga...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Spranked",
    "icon": "/images/new_mods/Sprunki Spranked.png",
    "url": "https://wowtbc.net/sprunkin/spranked/index.html",
    "description": "Home Squidki Spranked Squidki Spranked 583 votes The Incredibox Squidki Spranked Mod is a fan-cre...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Zombie Infection",
    "icon": "/images/new_mods/Squidki- Zombie Infection.png",
    "url": "https://wowtbc.net/sprunkin/zombies/index.html",
    "description": "Home Squidki: Zombie Infection Squidki: Zombie Infection 583 votes The Incredibox Squidki Zombie ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sprinkle",
    "icon": "/images/new_mods/Sprunki Sprinkle.png",
    "url": "https://wowtbc.net/sprunkin/sprinkle/index.html",
    "description": "Home Squidki Sprinkle Squidki Sprinkle 583 votes The Squidki Sprinkle Mod is a fan-made twist on ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Babies Broken",
    "icon": "/images/new_mods/Sprunki Babies Broken.png",
    "url": "https://wowtbc.net/sprunkin/babies-broken/index.html",
    "description": "Home Squidki Babies Broken Squidki Babies Broken 583 votes The Incredibox Squidki Babies Broken g...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Retake",
    "icon": "/images/new_mods/Sprunki Retake.png",
    "url": "https://wowtbc.net/sprunkin/retake/index.html",
    "description": "Home Squidki Retake Squidki Retake 583 votes The Incredibox Squidki Retake game brings a haunting...",
    "type": "New Mods"
  },
  {
    "name": "Squidki MoonSprunk!",
    "icon": "/images/new_mods/Sprunki MoonSprunk!.png",
    "url": "https://wowtbc.net/sprunkin/moonsprunk/index.html",
    "description": "Home Squidki MoonSprunk! Squidki MoonSprunk! 583 votes The Incredibox Squidki MoonSprunk game tak...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Totally Normal",
    "icon": "/images/new_mods/Sprunki Totally Normal.png",
    "url": "https://wowtbc.net/sprunkin/totally-normal/index.html",
    "description": "Home Squidki Totally Normal Squidki Totally Normal 583 votes The Incredibox Squidki Totally Norma...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Lost File: Family Friendly",
    "icon": "/images/new_mods/Sprunki Lost File- Family Friendly.png",
    "url": "https://wowtbc.net/sprunkin/lost-file-family-friendly/index.html",
    "description": "Home Squidki Lost File: Family Friendly Squidki Lost File: Family Friendly 583 votes The Incredib...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Smile AU",
    "icon": "/images/new_mods/Sprunki Smile AU.png",
    "url": "https://wowtbc.net/sprunkin/smile-au/index.html",
    "description": "Home Squidki Smile AU Squidki Smile AU 583 votes The Incredibox Squidki Smile AU game brings a un...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sepbox v2:The Depth",
    "icon": "/images/new_mods/Sprunki Sepbox v2-The Depth.png",
    "url": "https://wowtbc.net/sprunkin/sepbox-v2-depths/index.html",
    "description": "Home Squidki Sepbox v2:The Depth Squidki Sepbox v2:The Depth 583 votes The Incredibox Squidki Sep...",
    "type": "New Mods"
  },
  {
    "name": "Lethal Squidkiny",
    "icon": "/images/new_mods/Lethal Squidkiny.png",
    "url": "https://wowtbc.net/sprunkin/lethal/index.html",
    "description": "Home Lethal Squidkiny Lethal Squidkiny 583 votes The Incredibox Squidki Lethal Squidkiny Mod offe...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Sakura",
    "icon": "/images/new_mods/Sprunki Sakura.png",
    "url": "https://wowtbc.net/sprunkin/sakura/index.html",
    "description": "Home Squidki Sakura Squidki Sakura 583 votes The Incredibox Squidki Sakura Mod brings a unique an...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Everyone Alive Remake",
    "icon": "/images/new_mods/Sprunki Everyone Alive Remake.png",
    "url": "https://wowtbc.net/sprunkin/everyone-alive-remake1/index.html",
    "description": "Home Squidki Everyone Alive Remake Squidki Everyone Alive Remake 583 votes The Incredibox Squidki...",
    "type": "New Mods"
  },
  {
    "name": "FNF Squidkin (Rushed)",
    "icon": "/images/new_mods/FNF Squidkin (Rushed).png",
    "url": "https://wowtbc.net/sprunkin/fnf-rushed/index.html",
    "description": "Home FNF Squidkin (Rushed) FNF Squidkin (Rushed) 583 votes The Incredibox Squidki FNF Squidkin Ru...",
    "type": "New Mods"
  },
  {
    "name": "Squidki AYS",
    "icon": "/images/new_mods/Sprunki AYS.png",
    "url": "https://wowtbc.net/sprunkin/ays/index.html",
    "description": "Home Squidki AYS Squidki AYS 583 votes The Incredibox Squidki Ays Game offers a refreshing twist ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Bland Edition",
    "icon": "/images/new_mods/Sprunki Bland Edition.png",
    "url": "https://wowtbc.net/sprunkin/bland-edition/index.html",
    "description": "Home Squidki Bland Edition Squidki Bland Edition 583 votes Squidki Bland Edition Mod: Game Descri...",
    "type": "New Mods"
  },
  {
    "name": "Squidki but Dandy’s World Characters",
    "icon": "/images/new_mods/Sprunki but Dandy’s World Characters.png",
    "url": "https://wowtbc.net/sprunkin/but-dandy-world-character/index.html",
    "description": "Home Squidki but Dandy’s World Characters Squidki but Dandy’s World Characters 583 votes Incredib...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Qimaalutit",
    "icon": "/images/new_mods/Sprunki Qimaalutit.png",
    "url": "https://wowtbc.net/sprunkin/qimaalutit/index.html",
    "description": "Home Squidki Qimaalutit Squidki Qimaalutit 583 votes Incredibox Squidki Qimaalutit Game is a comp...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Reskin",
    "icon": "/images/new_mods/Sprunki Reskin.png",
    "url": "https://wowtbc.net/sprunkin/reskin/index.html",
    "description": "Home Squidki Reskin Squidki Reskin 583 votes The Incredibox Squidki Reskin Game is a fan-made mod...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Polos",
    "icon": "/images/new_mods/Sprunki But Polos.png",
    "url": "https://wowtbc.net/sprunkin/polos/index.html",
    "description": "Home Squidki But Polos Squidki But Polos 583 votes The Incredibox Squidki Polos Game is a creativ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki PvZ (Plant vs Zombies)",
    "icon": "/images/new_mods/Sprunki PvZ (Plant vs Zombies).png",
    "url": "https://wowtbc.net/sprunkin/plants-zombies/index.html",
    "description": "Home Squidki PvZ (Plant vs Zombies) Squidki PvZ (Plant vs Zombies) 583 votes Step into a musical ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki X Steel Factory [Sepbox]",
    "icon": "/images/new_mods/Sprunki X Steel Factory [Sepbox].png",
    "url": "https://wowtbc.net/sprunkin/steel-factory/index.html",
    "description": "Home Squidki X Steel Factory [Sepbox] Squidki X Steel Factory [Sepbox] 583 votes Step into the in...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Fanmade",
    "icon": "/images/new_mods/Sprunki Fanmade.png",
    "url": "https://wowtbc.net/sprunkin/fanmade/index.html",
    "description": "Home Squidki Fanmade Squidki Fanmade 583 votes Squidki Incredibox Fanmade Game brings a fresh, co...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Allgore Edition",
    "icon": "/images/new_mods/Sprunki Allgore Edition.png",
    "url": "https://wowtbc.net/sprunkin/allgore-edition/index.html",
    "description": "Home Squidki Allgore Edition Squidki Allgore Edition 583 votes Step into the eerie world of Sprun...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Halloween",
    "icon": "/images/new_mods/Sprunki Halloween.png",
    "url": "https://wowtbc.net/sprunkin/halloween1/index.html",
    "description": "Home Squidki Halloween Squidki Halloween 583 votes In the Squidki Halloween Mod, players can craf...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Endless",
    "icon": "/images/new_mods/Sprunki Endless.png",
    "url": "https://wowtbc.net/sprunkin/endless/index.html",
    "description": "Home Squidki Endless Squidki Endless 583 votes In Squidki Endless Mod, players enter a boundless ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 1",
    "icon": "/images/new_mods/Sprunki Phase 1.png",
    "url": "https://wowtbc.net/sprunkin/phase1/index.html",
    "description": "Home Squidki Phase 1 Squidki Phase 1 583 votes Squidki Phase 1 Mod introduces players to the orig...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Babies",
    "icon": "/images/new_mods/Sprunki Babies.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-babies/index.html",
    "description": "Home Squidki Babies Squidki Babies 583 votes Squidki Babies Mod brings an adorable twist to the S...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 2",
    "icon": "/images/new_mods/Sprunki Phase 2.png",
    "url": "https://html-classic.itch.zone/html/11700918/index.html",
    "description": "Home Squidki Phase 2 Squidki Phase 2 583 votes Squidki Phase 2 Mod continues the journey of the S...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: The Lost File",
    "icon": "/images/new_mods/Squidki- The Lost File.png",
    "url": "https://wowtbc.net/Squidki/lost-file/index.html",
    "description": "Home Squidki: The Lost File Squidki: The Lost File 583 votes In Squidki: The Lost File Mod, it’s ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Deluxe Edition",
    "icon": "/images/new_mods/Squidki- Deluxe Edition.png",
    "url": "https://wowtbc.net/Squidki/deluxe-editions/index.html?hh",
    "description": "Home Squidki: Deluxe Edition Squidki: Deluxe Edition 583 votes Incredibox Squidki Deluxe Editions...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Human [All Characters]",
    "icon": "/images/new_mods/Sprunki But Human [All Characters].png",
    "url": "https://wowtbc.net/Squidki/but-humans/index.html",
    "description": "Home Squidki But Human [All Characters] Squidki But Human [All Characters] 583 votes The Squidki ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Skibidi Toilet",
    "icon": "/images/new_mods/Squidki- Skibidi Toilet.png",
    "url": "https://wowtbc.net/Squidki/skibidi-toilet/index.html",
    "description": "Home Squidki: Skibidi Toilet Squidki: Skibidi Toilet 583 votes The Squidki: Skibidi Toilet game m...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Parasite",
    "icon": "/images/new_mods/Sprunki Parasite.png",
    "url": "https://wowtbc.net/Squidki/parasites/index.html",
    "description": "Home Squidki Parasite Squidki Parasite 583 votes The Squidki Parasite Mod, also called Parasprunk...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 6",
    "icon": "/images/new_mods/Sprunki Phase 6.png",
    "url": "https://wowtbc.net/Squidki/phase-6-fan/index.html",
    "description": "Home Squidki Phase 6 Squidki Phase 6 583 votes Squidki Phase 6 is the highly anticipated follow-u...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Doors",
    "icon": "/images/new_mods/Sprunki Doors.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-doors/index.html",
    "description": "Home Squidki Doors Squidki Doors 583 votes Squidki Doors is a unique musical game that combines t...",
    "type": "New Mods"
  },
  {
    "name": "Interactive Simon",
    "icon": "/images/new_mods/Interactive Simon.png",
    "url": "https://scratch.mit.edu/projects/1079870667/embed",
    "description": "Home Interactive Simon Interactive Simon 583 votes Interactive Simon blends the classic memory ch...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Night Time",
    "icon": "/images/new_mods/Squidki- Night Time.png",
    "url": "https://wowtbc.net/sprunkin/night-time/index.html",
    "description": "Home Squidki: Night Time Squidki: Night Time 583 votes The Squidki Night Time Mod brings a whole ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki BetterIcons",
    "icon": "/images/new_mods/Sprunki BetterIcons.png",
    "url": "https://html-classic.itch.zone/html/11699716/index.html",
    "description": "Home Squidki BetterIcons Squidki BetterIcons 583 votes The Squidki BetterIcons mod is a unique sp...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 5",
    "icon": "/images/new_mods/Sprunki Phase 5.png",
    "url": "https://wowtbc.net/Squidki/phase5-666/index.html",
    "description": "Home Squidki Phase 5 Squidki Phase 5 583 votes Squidki Phase 5 is the latest installment in the b...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Swapped Version",
    "icon": "/images/new_mods/Squidki- Swapped Version.png",
    "url": "https://wowtbc.net/sprunkin/swapped/index.html",
    "description": "Home Squidki: Swapped Version Squidki: Swapped Version 583 votes Squidki SWAPPED Versions Mod bri...",
    "type": "New Mods"
  },
  {
    "name": "Squidki: Mr. Fun Computers",
    "icon": "/images/new_mods/Squidki- Mr. Fun Computers.png",
    "url": "https://wowtbc.net/sprunkin/fun-computer/index.html",
    "description": "Home Squidki: Mr. Fun Computers Squidki: Mr. Fun Computers 583 votes Squidki: Mr. Fun Computers i...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Max Design Pro",
    "icon": "/images/new_mods/Sprunki Max Design Pro.png",
    "url": "https://scratch.mit.edu/projects/1083654806/embed",
    "description": "Home Squidki Max Design Pro Squidki Max Design Pro 583 votes Squidki Max Design Pro is a fan-made...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Bad [Mr Fun Computer]",
    "icon": "/images/new_mods/Sprunki Bad [Mr Fun Computer].png",
    "url": "https://html-classic.itch.zone/html/11750653/index.html",
    "description": "Home Squidki Bad [Mr Fun Computer] Squidki Bad [Mr Fun Computer] 583 votes Squidki Bad [Mr. Fun C...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Bad",
    "icon": "/images/new_mods/Sprunki But Bad.png",
    "url": "https://html-classic.itch.zone/html/11544863/index.html",
    "description": "Home Squidki But Bad Squidki But Bad 583 votes Squidki but Bad Mod is a hilarious twist on the cl...",
    "type": "New Mods"
  },
  {
    "name": "Squidki HD Mod",
    "icon": "/images/new_mods/Sprunki HD Mod.png",
    "url": "https://wowtbc.net/sprunkin/Squidki-original/index.html",
    "description": "Home Squidki HD Mod Squidki HD Mod 583 votes Squidki HD Mod Original is a fan-made modification o...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Realistic of them",
    "icon": "/images/new_mods/Sprunki But Realistic of them.png",
    "url": "https://cocrea.world/embed/1837109083767881730?type=player",
    "description": "Home Squidki But Realistic of them Squidki But Realistic of them 583 votes Squidki But Realistic ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Goreless Edition",
    "icon": "/images/new_mods/Sprunki Goreless Edition.png",
    "url": "https://wowtbc.net/Squidki/Squidki-goreless3/index.html",
    "description": "Home Squidki Goreless Edition Squidki Goreless Edition 583 votes Squidki Goreless Edition is a fa...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Rainbow Friends",
    "icon": "/images/new_mods/Sprunki Rainbow Friends.png",
    "url": "https://scratch.mit.edu/projects/1080380484/embed",
    "description": "Home Squidki Rainbow Friends Squidki Rainbow Friends 583 votes Squidki Rainbow Friends is a vibra...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 4",
    "icon": "/images/new_mods/Sprunki Phase 4.png",
    "url": "https://wowtbc.net/Squidki/phase-3remake-4/index.html",
    "description": "Home Squidki Phase 4 Squidki Phase 4 583 votes Squidki Phase 4: The Evolution Continues much-anti...",
    "type": "New Mods"
  },
  {
    "name": "Squidki OFC Scratch Port",
    "icon": "/images/new_mods/Sprunki OFC Scratch Port.png",
    "url": "https://html-classic.itch.zone/html/11749298/index.html",
    "description": "Home Squidki OFC Scratch Port Squidki OFC Scratch Port 583 votes The Squidki OFC Scratch Port Mod...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Modded",
    "icon": "/images/new_mods/Sprunki Modded.png",
    "url": "https://wowtbc.net/sprunkin/moddedv2/index.html",
    "description": "Home Squidki Modded Squidki Modded 583 votes This fan-made mod of Squidki brings exciting new fea...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Punch 2",
    "icon": "/images/new_mods/Sprunki Punch 2.png",
    "url": "https://html-classic.itch.zone/html/11757822/index.html",
    "description": "Home Squidki Punch 2 Squidki Punch 2 583 votes Squidki Punch Mod 2 is an exciting fan-made modifi...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Punch",
    "icon": "/images/new_mods/Sprunki Punch.png",
    "url": "https://html-classic.itch.zone/html/11757822/index.html",
    "description": "Home Squidki Punch Squidki Punch 583 votes Squidki Punch Mod is a fan-made modification that adds...",
    "type": "New Mods"
  },
  {
    "name": "Ozzybox Terrors",
    "icon": "/images/new_mods/Ozzybox Terrors.png",
    "url": "https://kdata1.com/2024/10/ozzybox-terrors/",
    "description": "Home Ozzybox Terrors Ozzybox Terrors 583 votes ‘Ozzybox’ is an entertaining Scratch game series c...",
    "type": "New Mods"
  },
  {
    "name": "Squidki GRAYVERSAL",
    "icon": "/images/new_mods/Sprunki GRAYVERSAL.png",
    "url": "https://cocrea.world/embed/1842922977589510146?type=player",
    "description": "Home Squidki GRAYVERSAL Squidki GRAYVERSAL 583 votes The Squidki Grayversal Mod is a fan-made add...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Baldunki",
    "icon": "/images/new_mods/Sprunki Baldunki.png",
    "url": "https://scratch.mit.edu/projects/1081792412/embed",
    "description": "Home Squidki Baldunki Squidki Baldunki 583 votes Squidki Baldunki is a fan-made mod of the popula...",
    "type": "New Mods"
  },
  {
    "name": "Super Squidki Brasil",
    "icon": "/images/new_mods/Super Squidki Brasil.png",
    "url": "https://scratch.mit.edu/projects/1080827660/embed",
    "description": "Home Super Squidki Brasil Super Squidki Brasil 583 votes Super Squidki Brasil is a fan-made mod o...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Alpha",
    "icon": "/images/new_mods/Sprunki But Alpha.png",
    "url": "https://scratch.mit.edu/projects/1081200267/embed",
    "description": "Home Squidki But Alpha Squidki But Alpha 583 votes Squidki But Alpha is a fan-made mod based on t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Remastered",
    "icon": "/images/new_mods/Sprunki Remastered.png",
    "url": "https://wowtbc.net/Squidki/remastered-2/index.html",
    "description": "Home Squidki Remastered Squidki Remastered 583 votes Squidki Remaster is a reimagined version of ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki but everyone is alive",
    "icon": "/images/new_mods/Sprunki but everyone is alive.png",
    "url": "https://wowtbc.net/sprunkin/but-everyone-alive/index.html",
    "description": "Home Squidki but everyone is alive Squidki but everyone is alive 583 votes Squidki But Everyone i...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Game [Original]",
    "icon": "/images/new_mods/Sprunki Game [Original].png",
    "url": "https://wowtbc.net/sprunkin/Squidki-original/index.html",
    "description": "Home Squidki Game [Original] Squidki Game [Original] 583 votes Incredibox Squidki is an original ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Phase 3",
    "icon": "/images/new_mods/Sprunki Phase 3.png",
    "url": "https://wowtbc.net/Squidki/phase-3/index.html",
    "description": "Home Squidki Phase 3 Squidki Phase 3 583 votes Incredibox Squidki is a unique music-making game t...",
    "type": "New Mods"
  },
  {
    "name": "Squidki x Regretevator",
    "icon": "/images/new_mods/Sprunki x Regretevator.png",
    "url": "https://wowtbc.net/sprunkin/regretevator1/index.html",
    "description": "Home Squidki x Regretevator Squidki x Regretevator 583 votes Squidki x Regretevator is a fun and ...",
    "type": "New Mods"
  },
  {
    "name": "Sprunked (Daytime Demo)",
    "icon": "/images/new_mods/Sprunked (Daytime Demo).png",
    "url": "https://wowtbc.net/sprunkin/sprunked-day-time/index.html",
    "description": "Home Sprunked (Daytime Demo) Sprunked (Daytime Demo) 583 votes Welcome to Sprunked, an exciting g...",
    "type": "New Mods"
  },
  {
    "name": "Incredibox Cataclysm",
    "icon": "/images/new_mods/Incredibox Cataclysm.png",
    "url": "https://scratch.mit.edu/projects/568822282/embed",
    "description": "Home Incredibox Cataclysm Incredibox Cataclysm 583 votes Incredibox Cataclysm takes players to a ...",
    "type": "New Mods"
  },
  {
    "name": "Foreverbox",
    "icon": "/images/new_mods/Foreverbox.png",
    "url": "https://joalor64gh.github.io/Foreverbox/",
    "description": "Home Foreverbox Foreverbox 583 votes Foreverbox is an exciting online game that brings together s...",
    "type": "New Mods"
  },
  {
    "name": "Abgerny Incredibox",
    "icon": "/images/new_mods/Abgerny Incredibox.png",
    "url": "https://wowtbc.net/sprunkin/abgerny/index.html",
    "description": "Home Abgerny Incredibox Abgerny Incredibox 583 votes Abgerny Incredibox is a part of the Incredib...",
    "type": "New Mods"
  },
  {
    "name": "FNF Squidkin",
    "icon": "/images/new_mods/FNF Squidkin.png",
    "url": "https://fnf.kdata1.com/2024/Squidki-Squidkin/1/",
    "description": "Home FNF Squidkin FNF Squidkin 583 votes FNF vs Squidki – Squidkin is a creative and engaging mod...",
    "type": "New Mods"
  },
  {
    "name": "Incredibox Mustard",
    "icon": "/images/new_mods/Incredibox Mustard.png",
    "url": "https://kdata1.com/2024/10/colorbox-mustard/",
    "description": "Home Incredibox Mustard Incredibox Mustard 583 votes Squidki Incredibox Mustard is a creative and...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But Something Is Wrong",
    "icon": "/images/new_mods/Sprunki But Something Is Wrong.png",
    "url": "https://scratch.mit.edu/projects/1074278226/embed",
    "description": "Home Squidki But Something Is Wrong Squidki But Something Is Wrong 583 votes Squidki But Somethin...",
    "type": "New Mods"
  },
  {
    "name": "Squidki TADC Game",
    "icon": "/images/new_mods/Sprunki TADC Game.png",
    "url": "https://scratch.mit.edu/projects/1080851807/embed",
    "description": "Home Squidki TADC Game Squidki TADC Game 583 votes Squidki TADC Game is a fan-made adaptation of ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Dandy’s World",
    "icon": "/images/new_mods/Sprunki Dandy’s World.png",
    "url": "https://html-classic.itch.zone/html/11721752/index.html",
    "description": "Home Squidki Dandy’s World Squidki Dandy’s World 583 votes Squidki Dandy’s World Mod is an exciti...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Remix",
    "icon": "/images/new_mods/Sprunki Remix.png",
    "url": "https://scratch.mit.edu/projects/1066843673/embed",
    "description": "Home Squidki Remix Squidki Remix 583 votes Squidki Remix is a creative remix of the popular rhyth...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Infected",
    "icon": "/images/new_mods/Sprunki Infected.png",
    "url": "https://html-classic.itch.zone/html/11700918/index.html",
    "description": "Home Squidki Infected Squidki Infected 583 votes Squidki Infected is an engaging puzzle game mod ...",
    "type": "New Mods"
  },
  {
    "name": "Squidki With Fan Character",
    "icon": "/images/new_mods/Sprunki With Fan Character.png",
    "url": "https://html-classic.itch.zone/html/11747669/index.html",
    "description": "Home Squidki With Fan Character Squidki With Fan Character 583 votes Squidki With Fan Character i...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Abgerny",
    "icon": "/images/new_mods/Sprunki Abgerny.png",
    "url": "https://wowtbc.net/sprunkin/abgerny/index.html",
    "description": "Home Squidki Abgerny Squidki Abgerny 583 votes Abgerny Squidki is an exciting addition to the Inc...",
    "type": "New Mods"
  },
  {
    "name": "Squidki Eddsworld Mod!",
    "icon": "/images/new_mods/Sprunki Eddsworld Mod!.png",
    "url": "https://html-classic.itch.zone/html/11741033/index.html",
    "description": "Home Squidki Eddsworld Mod! Squidki Eddsworld Mod! 583 votes The Squidki Eddsworld Mod is an exci...",
    "type": "New Mods"
  },
  {
    "name": "Squidki But I Ruined It",
    "icon": "/images/new_mods/Sprunki But I Ruined It.png",
    "url": "https://html-classic.itch.zone/html/11752827/index.html",
    "description": "Home Squidki But I Ruined It Squidki But I Ruined It 583 votes Squidki But I Ruined It is a quirk...",
    "type": "New Mods"
  },
  {
    "name": "Squidki X Rejecz [SPREJECZ]",
    "icon": "/images/new_mods/Sprunki X Rejecz [SPREJECZ].png",
    "url": "https://wowtbc.net/sprunkin/Squidki-x-rejecz/index.html",
    "description": "Home Squidki X Rejecz [SPREJECZ] Squidki X Rejecz [SPREJECZ] 583 votes What is Squidki X Rejecz [...",
    "type": "New Mods"
  }
]

export default function MoreGames() {
  const [currentGame, setCurrentGame] = useState<string>("")
  const [currentPage, setCurrentPage] = useState(1)
  const gamesPerPage = 30
  
  // 计算总页数
  const totalPages = Math.ceil(games.length / gamesPerPage)
  
  // 获取当前页的游戏
  const getCurrentPageGames = () => {
    const startIndex = (currentPage - 1) * gamesPerPage
    const endIndex = startIndex + gamesPerPage
    return games.slice(startIndex, endIndex)
  }

  // 生成页码数组
  const getPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
    return pageNumbers
  }

  return (
    <main>
      <Navbar onGameSelect={setCurrentGame} />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">More Squidki Games</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {getCurrentPageGames().map((game, index) => (
              <a
                key={index}
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="relative h-36">
                  <Image
                    src={game.icon}
                    alt={game.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 line-clamp-1">{game.name}</h3>
                  <p className="text-gray-300 mb-3 text-sm line-clamp-2">{game.description}</p>
                  <span className="inline-block bg-purple-600 text-white px-3 py-1.5 rounded-lg hover:bg-purple-700 transition-colors text-sm w-full text-center">
                    Play Now
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* 分页控件 */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
            >
              Previous
            </button>
            
            {getPageNumbers().map(number => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`w-10 h-10 rounded-lg ${
                  currentPage === number 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-800 hover:bg-gray-700'
                } transition-colors`}
              >
                {number}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}