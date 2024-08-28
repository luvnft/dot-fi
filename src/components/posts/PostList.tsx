import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PostCard from "./PostCard";

// header with horizontal scroll
export default function PostList({ asComment = false }) {
  return (
    <div className="py-10">
      {/* Post List */}
      {/* <ScrollArea className="h-screen rounded-md pb-20 "> */}
      {/* <CardSubmission /> */}
      {/* <HiveCreate /> */}
      {MOCK_LIST.map((item, i) => (
        <PostCard key={i} {...{ post: item, asComment }} />
      ))}
      {/* </ScrollArea> */}
    </div>
  );
}

const MOCK_PROFILES = [
  {
    id: "",
    handler: "",
    provider: "evm",
    address: "",
    // email
    qualityProfile: {},
    displayPicture: {},
    social_medias: {
      //
    },
  },
];

const SIMPLE_PROFILES = [
  {
    img_url:
      "https://pbs.twimg.com/profile_images/1814205416026632192/ItJbCO8Z_400x400.jpg",
    handler: "@theras_labs",
    name: "Theras Labs",
  },
  {
    img_url:
      "https://pbs.twimg.com/profile_images/1814205416026632192/ItJbCO8Z_400x400.jpg",
    handler: "@theras_labs",
    name: "Polygon Dads BUDDY",
  },
];

// x space https://x.com/MemeBuddyMaster/status/1828432506577707492
// x space polygon Dads
// x medieval
// social giveaway
// create content for buzzzup topic -> earn
// i know it's not ideal yet, but everything start somewhere first, and we will improve it later
// giveaway should be simple

const COMMENT_LIST = [
  {
    createdAt: "",
    createdBy: "", // profile
    updatedAt: "",
    id: "1",
    title: "Twitter Space BUZZUP x BUDDY",
    desc: `
      Share your post here also works
    `,
    image: "",
    deadline: null,
    profile: {
      img_url:
        "https://pbs.twimg.com/profile_images/1814205416026632192/ItJbCO8Z_400x400.jpg",
      handler: "@theras_labs",
      name: "Theras Labs",
    },
    boost: true,
    automation: true,
    qualityProfile: null,
    repetitive: null,
    status: "ended", // ongoing // ended // time left
    // status: {
    //   // ended
    //   // closed
    //   // open
    // },
    operator: {
      // team that stake? or hve ownership
      // to confirm that situation or approvals, when the new deadline appeared? or just create the post new/ share the post
    },
    tags: ["trending"],
    stake: {},
    comments: {},
    likes: {},
    proofs: {},
    share: {
      count: 0,
    },
  },
];

export const MOCK_LIST = [
  {
    createdAt: "",
    createdBy: "", // profile
    updatedAt: "",
    id: "1",

    title: "Twitter Space BUZZUP x BUDDY",
    desc: `
    <p>🚀 Join BUDDY Twitter Space powered by Theras Labs (BUZZUP Team)</p>
    <p>
<a href="https://x.com/MemeBuddyMaster/status/1828432506577707492" target="_blank" style="color: rgb(102, 163, 204); --darkreader-inline-color: #8fcbf9;" data-darkreader-inline-color="">
        <u>https://x.com/MemeBuddyMaster/status/1828432506577707492</u>
    </a>
</p>
<p>
    <br>
</p>
<p>BUDDY is a token associated with the AI BUDDY MEME TOKEN. It enables users to create AI-generated images on social media by simply holding or using BUDDY tokens, you can access tools for generating unique, creative memes and images that can enhance your
    social media presence.</p>
<p>It’s designed to combine the power of AI with the creativity of meme culture!</p>
<p>
    <br>
</p>
<p>Simply participate in our weekly Twitter Space by BUDDY. Engage in the conversation, or just say hi for the rewards, and share your thoughts on BUZZUP and the BUDDY token. Capture your participation and submit proof to earn rewards.</p>
<p>
    <br>
</p>
<p>Rewards:</p>
<p>1000 $BUZZ</p>
<p>1000 $BUDDY</p>
<ul>
    <li>Don’t miss out—engage and get rewarded! 🌟</li>
</ul>
    `,
    description: `
  🚀 Join BUDDY Twitter Space powered by Theras Labs (BUZZUP Team)

  BUDDY is a token associated with the AI BUDDY MEME TOKEN. It enables users to create AI-generated images on social media by simply holding or using BUDDY tokens, you can access tools for generating unique, creative memes and images that can enhance your social media presence. 
  It’s designed to combine the power of AI with the creativity of meme culture!

  Simply participate in our weekly Twitter Space by BUDDY. Engage in the conversation, or just say hi for the rewards, and share your thoughts on BUZZUP and the BUDDY token. Capture your participation and submit proof to earn rewards.

  Rewards:
  1000 $BUZZ
  1000 $BUDDY
  Don’t miss out—engage and get rewarded! 🌟

    `,
    image: "",
    hive: true,
    boosted: true,
    deadline: null,
    profile: {
      img_url:
        "https://pbs.twimg.com/profile_images/1814205416026632192/ItJbCO8Z_400x400.jpg",
      handler: "@theras_labs",
      name: "Theras Labs",
    },
    rewards: {
      crypto: [
        {
          token_address: "",
          token_link: "",
          token_ticker: "",
          amount: 1000,
          // wei:""
        },
      ],
    },
    boost: true,
    automation: true,
    qualityProfile: null,
    repetitive: null,
    status: "ended", // ongoing // ended // time left
    // status: {
    //   // ended
    //   // closed
    //   // open
    // },
    operator: {
      // team that stake? or hve ownership
      // to confirm that situation or approvals, when the new deadline appeared? or just create the post new/ share the post
    },
    tags: ["trending"],
    stake: {},
    comments: {
      list: [COMMENT_LIST[0]],
    },
    likes: {},
    proofs: {},
    share: {
      count: 0,
    },
  },
  {
    createdAt: "",
    createdBy: "", // profile
    updatedAt: "",
    id: "2",
    title: "$25 Giveaway Event",
    desc: `
    <p>
    <span  data-darkreader-inline-color="">$25 GIVEAWAY EVENT🎉</span>
</p>
<p>
    <span  data-darkreader-inline-color="">@theras_labs</span>
</p>
<p>
    <span  data-darkreader-inline-color="">x</span>
</p>
<p>
    <span  data-darkreader-inline-color="">@MemeBuddyMaster</span>
</p>
<p>
    <span  data-darkreader-inline-color=""></span>
</p>
<p>
    <br>
</p>
<p>
    <span  data-darkreader-inline-color="">We have decided to reward and engage our community, those who are currently with us and those who are hoping to be a part of something unique. This might be a promise you have seen before, but it's what we are really hoping to implement.🤝</span>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>
    <br>
</p>
<p>
    <span  data-darkreader-inline-color="">📩💸Cash Giveaway Currently Ongoing on our Discord.</span>
</p>
<p>
    <br>
</p>
<p>
    <span  data-darkreader-inline-color="">PRIZES 🏆:</span>
</p>
<p>
    <span  data-darkreader-inline-color="">▪️STAR-EX AIRDROP NFT</span>
</p>
<p>
    <span  data-darkreader-inline-color="">(SPARTAA 300)</span>
</p>
<p>
    <span  data-darkreader-inline-color="">X</span>
</p>
<p>
    <span  data-darkreader-inline-color="">💲25 LUCKY GIVEAWAY</span>
</p>
<p>
    <br>
</p>
<p>
    <span  data-darkreader-inline-color="">Rules:</span>
</p>
<p>
    <span  data-darkreader-inline-color="">1. Join our discord community.</span>
</p>
<p>
    <span  data-darkreader-inline-color="">2. Check the #event channel.</span>
</p>
<p>
    <span  data-darkreader-inline-color="">3. Like, comment and repost this tweet.</span>
</p>
<p>
    <span  data-darkreader-inline-color="">(𝘔𝘶𝘭𝘵𝘪𝘱𝘭𝘦 𝘸𝘪𝘯𝘯𝘦𝘳𝘴)</span>
</p>
<p>
    <br>
</p>
<ul>
    <li>
    <a href="https://discord.gg/starex" target="_blank" style="color: rgb(102, 163, 204); --darkreader-inline-color: #8fcbf9;" data-darkreader-inline-color="">
        <u>https://discord.gg/starex</u>
    </a>
    </li>
</ul>
    
    `,
    description: `
  $25 GIVEAWAY EVENT🎉
@theras_labs
 x
@MemeBuddyMaster
    

We have decided to reward and engage our community, those who are currently with us and those who are hoping to be a part of something unique. This might be a promise you have seen before, but it's what we are really hoping to implement.🤝



📩💸Cash Giveaway Currently Ongoing on our Discord.

PRIZES 🏆: 
▪️STAR-EX AIRDROP NFT
           (SPARTAA 300)
                       X
💲25 LUCKY GIVEAWAY

Rules:
1. Join our discord community.
2. Check the #event channel.
3. Like, comment and repost this tweet.
 (𝘔𝘶𝘭𝘵𝘪𝘱𝘭𝘦 𝘸𝘪𝘯𝘯𝘦𝘳𝘴)

Link: http://discord.com/invite/cxmMRMNt

    `,
    image: "https://pbs.twimg.com/media/GSDIda_WwAAMrI5?format=jpg&name=large",
    boosted: true,
    deadline: null,
    profile: SIMPLE_PROFILES[0],
    // rewards: {
    //   crypto: [
    //     {
    //       token_address: "",
    //       token_link: "",
    //       token_ticker: "",
    //       amount: 1000,
    //       // wei:""
    //     },
    //   ],
    // },
    boost: true,
    automation: true,
    qualityProfile: null,
    repetitive: null,
    status: "ended", // ongoing // ended // time left
    // status: {
    //   // ended
    //   // closed
    //   // open
    // },
    operator: {
      // team that stake? or hve ownership
      // to confirm that situation or approvals, when the new deadline appeared? or just create the post new/ share the post
    },
    tags: ["trending"],
    stake: {},
    comments: {},
    likes: {},
    proofs: {},
    share: {
      count: 0,
    },
  },
];
