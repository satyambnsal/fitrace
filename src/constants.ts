import frtTokenPath from "@/assets/frtToken.svg";
import starknetIconPath from "@/assets/starknetIcon.svg";
import ethSymbolPath from "@/assets/ethSymbol.svg";

import trophyPath from "@/assets/trophy.svg";
import sneakerWhitePath from "@/assets/sneakerWhite.svg";
import compassWhitePath from "@/assets/compassWhite.svg";

export const SAMPLE_PROFILE_URL =
  "https://img.freepik.com/free-photo/back-view-serious-man_23-2148946211.jpg?t=st=1727355594~exp=1727356194~hmac=f60762afae611df89dfe8681c056432b6e60d59f726d4bb5d3e0c5ac755e8991";

export const TOKEN_BADGES_DATA = [
  {
    tokenSymbol: "STRK",
    amount: 12,
    symbolUrl: starknetIconPath,
  },
  {
    tokenSymbol: "FRT",
    amount: 3000,
    symbolUrl: frtTokenPath,
  },
  {
    tokenSymbol: "ETH",
    amount: 500,
    symbolUrl: ethSymbolPath,
  },
];

export const FEATURE_LIST_DATA = [
  {
    name: "CHALLENGES",
    description: "Take on exciting challenges and compete with friends !",
    logoUrl: trophyPath,
    logoAlt: "trophy",
  },
  {
    name: "EARN",
    description: " Earn rewards through our Move to Earn system !",
    logoUrl: sneakerWhitePath,
    logoAlt: "sneaker",
  },
  {
    name: "SocialFi",
    description:
      "Connect with others and stay motivated with our SocialFi features !",
    logoUrl: compassWhitePath,
    logoAlt: "compass",
  },
];

export const LEADERBOARD_PLAYERS = [
  {
    name: "Alex Starling",
    rank: 1,
    steps: "15,342",
    profileUrl: SAMPLE_PROFILE_URL,
  },
  {
    name: "Alex Starling",
    rank: 2,
    steps: "15,342",
    profileUrl: SAMPLE_PROFILE_URL,
  },

  {
    name: "Alex Starling",
    rank: 3,
    steps: "15,342",
    profileUrl: SAMPLE_PROFILE_URL,
  },
  {
    name: "Alex Starling",
    rank: 4,
    steps: "15,342",
    profileUrl: SAMPLE_PROFILE_URL,
  },

  {
    name: "Alex Starling",
    rank: 5,
    steps: "15,342",
    profileUrl: SAMPLE_PROFILE_URL,
  },
  {
    name: "Alex Starling",
    rank: 6,
    steps: "15,342",
    profileUrl: SAMPLE_PROFILE_URL,
  },

  {
    name: "Alex Starling",
    rank: 7,
    steps: "15,342",
    profileUrl: SAMPLE_PROFILE_URL,
  },

  {
    name: "Alex Starling",
    rank: 8,
    steps: "15,342",
    profileUrl: SAMPLE_PROFILE_URL,
  },
];

export const NOTIFICATIONS_CONTENT = [
  {
    title: "You've got rewards waiting! Claim them now and keep going!",
    date: "September 24 2024",
    personImgUrl: SAMPLE_PROFILE_URL,
  },
  {
    title: "Time to move! Start earning now by taking your first steps today!",
    date: "September 23 2024",
    personImgUrl: SAMPLE_PROFILE_URL,
  },
  {
    title: "Time to move! Start earning now by taking your first steps today!",
    date: "September 22 2024",
    personImgUrl: SAMPLE_PROFILE_URL,
  },
];
