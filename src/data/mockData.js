// ─── Mock Peer Stories ───
export const mockStories = [
  {
    id: 1,
    author: "Officer Hawk",
    avatar: "🦅",
    timeAgo: "2 hours ago",
    content:
      "After a particularly tough night shift last week, I found myself unable to sleep. The images kept replaying. I reached out to a peer on this platform and it genuinely helped just knowing someone understood without having to explain the context. You're not alone in this.",
    likes: 24,
    comments: 8,
    tags: ["Sleep Issues", "Peer Support"],
  },
  {
    id: 2,
    author: "Officer Fox",
    avatar: "🦊",
    timeAgo: "5 hours ago",
    content:
      "I've been on the force for 12 years, and it took me 10 to admit I needed help. The stigma is real, but it's slowly changing. I started attending group therapy through one of the NGOs listed here, and it's been transformational. Please don't wait as long as I did.",
    likes: 41,
    comments: 15,
    tags: ["Therapy", "Breaking Stigma"],
  },
  {
    id: 3,
    author: "Officer Wolf",
    avatar: "🐺",
    timeAgo: "1 day ago",
    content:
      "Grounding techniques genuinely saved me during a panic episode mid-shift. I stepped away for two minutes, focused on five things I could see, four I could touch... it brought me back. Sharing in case it helps anyone reading this.",
    likes: 56,
    comments: 22,
    tags: ["Grounding", "On Shift"],
  },
  {
    id: 4,
    author: "Officer Bear",
    avatar: "🐻",
    timeAgo: "2 days ago",
    content:
      "The weekend hike organised through this platform last month was exactly what I needed. Being out in nature with people who understand the job — no pressure to talk about it, but the option was there. Looking forward to the next one.",
    likes: 33,
    comments: 11,
    tags: ["Events", "Nature"],
  },
  {
    id: 5,
    author: "Officer Eagle",
    avatar: "🦅",
    timeAgo: "3 days ago",
    content:
      'I completed the self-assessment quiz on here and it opened my eyes to patterns I hadn\'t noticed. Hypervigilance had become my "normal." The resources section pointed me to a brilliant therapist who specialises in emergency services PTSD.',
    likes: 29,
    comments: 9,
    tags: ["Self-Assessment", "Resources"],
  },
  {
    id: 6,
    author: "Officer Owl",
    avatar: "🦉",
    timeAgo: "4 days ago",
    content:
      "Three months into therapy and I finally feel like I'm getting somewhere. The nightmares are less frequent, I'm sleeping better, and my family has noticed the change. There is light at the end of the tunnel. Keep going.",
    likes: 67,
    comments: 31,
    tags: ["Recovery", "Hope"],
  },
];

// ─── AI Recommendations ───
export const aiRecommendations = [
  { name: "Officer K.", reason: "Similar Experiences", avatar: "🦊" },
  { name: "Officer M.", reason: "Shared Recovery Path", avatar: "🐺" },
  { name: "Officer R.", reason: "Same Service Area", avatar: "🦅" },
];

// ─── Resources ───
export const mockResources = [
  {
    id: 1,
    title: "Therapy Group Sessions",
    description:
      "Find local group therapy sessions specifically for emergency services personnel. Safe, confidential, and led by qualified professionals.",
    icon: "Users",
    category: "therapy",
    link: "#",
  },
  {
    id: 2,
    title: "Educational Articles",
    description:
      "Evidence-based articles on PTSD, trauma responses, coping strategies, and recovery journeys written by clinical psychologists.",
    icon: "BookOpen",
    category: "education",
    link: "#",
  },
  {
    id: 3,
    title: "1-on-1 Therapy",
    description:
      "Connect with therapists experienced in police PTSD. Confidential online and in-person sessions available across the UK.",
    icon: "UserCheck",
    category: "therapy",
    link: "#",
  },
  {
    id: 4,
    title: "Support Groups",
    description:
      "Peer-led support circles for officers at every stage of their mental health journey. Weekly online and monthly in-person meetups.",
    icon: "Heart",
    category: "support",
    link: "#",
  },
  {
    id: 5,
    title: "Crisis Helpline",
    description:
      "Immediate, 24/7 confidential support for officers in crisis. Staffed by trained counsellors who understand policing.",
    icon: "Phone",
    category: "crisis",
    link: "#",
  },
  {
    id: 6,
    title: "Family Support",
    description:
      "Resources for families of officers dealing with PTSD. Understanding the impact, communication strategies, and family therapy options.",
    icon: "Home",
    category: "family",
    link: "#",
  },
];

// ─── NGO Partners ───
export const mockNGOs = [
  {
    id: 1,
    name: "Police Care UK",
    description:
      "Supporting serving and former police officers with physical and psychological wellbeing programmes.",
    activities: "Workshops • Retreats • Counselling",
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "Mind Blue Light",
    description:
      "Mental health support tailored specifically for emergency service workers and their families.",
    activities: "Training • Peer Support • Resources",
    color: "bg-indigo-600",
  },
  {
    id: 3,
    name: "Veterans' Support Network",
    description:
      "Bridging military and police mental health services with shared trauma-informed approaches.",
    activities: "Group Sessions • Mentoring • Events",
    color: "bg-emerald-600",
  },
  {
    id: 4,
    name: "The Police Treatment Centres",
    description:
      "Residential rehabilitation and wellness programmes for serving police officers across the UK.",
    activities: "Rehabilitation • Wellness • Recovery",
    color: "bg-amber-600",
  },
];

// ─── Chat Contacts ───
export const mockChatContacts = [
  {
    id: 1,
    name: "Officer Wolf",
    avatar: "🐺",
    lastMessage: "Thanks for the advice yesterday, really helped.",
    time: "2m ago",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Officer Hawk",
    avatar: "🦅",
    lastMessage: "See you at the hike this Saturday?",
    time: "15m ago",
    unread: 1,
    online: true,
  },
  {
    id: 3,
    name: "Officer Bear",
    avatar: "🐻",
    lastMessage: "The grounding technique you shared was brilliant.",
    time: "1h ago",
    unread: 0,
    online: false,
  },
  {
    id: 4,
    name: "Officer Owl",
    avatar: "🦉",
    lastMessage: "Let me know if you want to talk more about it.",
    time: "3h ago",
    unread: 0,
    online: false,
  },
  {
    id: 5,
    name: "Officer Eagle",
    avatar: "🦅",
    lastMessage: "Great session today. Take care of yourself.",
    time: "1d ago",
    unread: 0,
    online: false,
  },
];

// ─── Chat Messages (for Officer Wolf conversation) ───
export const mockMessages = {
  1: [
    {
      id: 1,
      sender: "Officer Wolf",
      content:
        "Hey, I saw your story about the night shift. I've been through something similar.",
      time: "10:30 AM",
      isUser: false,
    },
    {
      id: 2,
      sender: "You",
      content:
        "Thanks for reaching out. It means a lot knowing someone else gets it.",
      time: "10:32 AM",
      isUser: true,
    },
    {
      id: 3,
      sender: "Officer Wolf",
      content:
        "Absolutely. Have you tried the breathing exercises from the resources section? They helped me a lot.",
      time: "10:33 AM",
      isUser: false,
    },
    {
      id: 4,
      sender: "You",
      content:
        "Not yet, but I'll check them out. Did you attend any of the group sessions?",
      time: "10:35 AM",
      isUser: true,
    },
    {
      id: 5,
      sender: "Officer Wolf",
      content:
        "Yes, the Thursday evening ones. Really recommend them — small group, very supportive atmosphere. No pressure to share if you're not ready.",
      time: "10:36 AM",
      isUser: false,
    },
    {
      id: 6,
      sender: "You",
      content: "That sounds manageable. I might give it a try next week.",
      time: "10:38 AM",
      isUser: true,
    },
    {
      id: 7,
      sender: "Officer Wolf",
      content: "Thanks for the advice yesterday, really helped.",
      time: "10:40 AM",
      isUser: false,
    },
  ],
};

// ─── Events ───
export const mockEvents = [
  {
    id: 1,
    title: "Mental Health Hike — Peak District",
    date: "Saturday, 17 May 2026",
    time: "09:00 AM",
    location: "Peak District National Park",
    organizer: "Police Care UK",
    description:
      "A gentle, scenic hike through the Peak District. Open to all officers and their families. No fitness requirements — just fresh air and good company.",
    attendees: 23,
    category: "Outdoor",
    attending: false,
  },
  {
    id: 2,
    title: "Yoga & Mindfulness Session",
    date: "Wednesday, 14 May 2026",
    time: "18:30 PM",
    location: "Online (Zoom)",
    organizer: "Mind Blue Light",
    description:
      "A calming yoga session designed for beginners, focusing on stress relief and mindfulness techniques for shift workers.",
    attendees: 15,
    category: "Wellness",
    attending: false,
  },
  {
    id: 3,
    title: "Online Gaming Lobby — Call of Duty",
    date: "Friday, 16 May 2026",
    time: "20:00 PM",
    location: "Online (Discord)",
    organizer: "Officer Bear",
    description:
      "Casual gaming session. No ranks, no stress. Just some laughs and team play. All skill levels welcome!",
    attendees: 12,
    category: "Gaming",
    attending: false,
  },
  {
    id: 4,
    title: "PTSD Awareness Workshop",
    date: "Tuesday, 20 May 2026",
    time: "14:00 PM",
    location: "London Metropolitan HQ",
    organizer: "Police Care UK",
    description:
      "Educational workshop covering the latest research on PTSD in emergency services. Includes practical coping strategies.",
    attendees: 34,
    category: "Workshop",
    attending: false,
  },
  {
    id: 5,
    title: "Photography Walk — Lake District",
    date: "Sunday, 25 May 2026",
    time: "10:00 AM",
    location: "Lake District",
    organizer: "Veterans' Support Network",
    description:
      "Combine nature therapy with creative expression. Bring any camera — phone cameras absolutely fine. Focus on the beauty around you.",
    attendees: 18,
    category: "Outdoor",
    attending: false,
  },
  {
    id: 6,
    title: "Coffee & Chat Morning",
    date: "Thursday, 15 May 2026",
    time: "10:00 AM",
    location: "Various locations (see details)",
    organizer: "Mind Blue Light",
    description:
      "Informal meetup at local cafes across the UK. Meet other officers in a relaxed setting. Locations posted weekly.",
    attendees: 8,
    category: "Social",
    attending: false,
  },
];

// ─── PTSD Self-Assessment Questions ───
export const assessmentQuestions = [
  {
    id: 1,
    question:
      "Have you experienced trouble sleeping or nightmares in the past two weeks?",
    subtext:
      "This includes difficulty falling asleep, staying asleep, or having disturbing dreams related to work events.",
  },
  {
    id: 2,
    question:
      "Do you find yourself avoiding places, situations, or people that remind you of a traumatic event?",
    subtext:
      "Avoidance can include changing routes, declining social events, or steering clear of certain topics.",
  },
  {
    id: 3,
    question:
      "Have you felt emotionally numb or disconnected from people close to you?",
    subtext:
      "This might feel like going through the motions, difficulty expressing feelings, or feeling detached from loved ones.",
  },
  {
    id: 4,
    question:
      "Do you experience sudden episodes of intense anxiety, hypervigilance, or being easily startled?",
    subtext:
      "Hypervigilance can manifest as constantly scanning for threats, even in safe environments off-duty.",
  },
];

export const assessmentOptions = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

// ─── Chatbot Responses ───
export const chatbotResponses = {
  "How do I deal with hypervigilance on shift?": `Hypervigilance is one of the most common experiences for officers dealing with PTSD, and it's important to know that what you're feeling is a natural response to prolonged exposure to high-stress situations.\n\nHere are some evidence-based strategies:\n\n**1. Grounding Techniques (5-4-3-2-1)**\nWhen you notice hypervigilance escalating, try identifying 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. This anchors you to the present moment.\n\n**2. Controlled Breathing**\nPractise box breathing: inhale for 4 seconds, hold for 4, exhale for 4, hold for 4. This activates your parasympathetic nervous system.\n\n**3. Cognitive Reframing**\nRemind yourself: "I am scanning for threats because my brain is trying to protect me. I can acknowledge this response and choose to assess the actual risk level."\n\n**4. Regular Decompression**\nBuild in transition time between shift and home. Even 10 minutes of quiet time in your car listening to calming music can help your nervous system downshift.\n\nWould you like me to suggest some specific resources or connect you with a peer who has managed hypervigilance successfully?`,

  "What are grounding techniques?": `Grounding techniques are strategies that help you stay connected to the present moment when you're feeling overwhelmed, anxious, or triggered. They work by redirecting your focus from distressing thoughts or flashbacks to your immediate physical surroundings.\n\nHere are the most effective techniques recommended by UK Police PTSD researchers:\n\n**The 5-4-3-2-1 Method**\n• 5 things you can SEE\n• 4 things you can TOUCH\n• 3 things you can HEAR\n• 2 things you can SMELL\n• 1 thing you can TASTE\n\n**Physical Grounding**\nPress your feet firmly into the ground. Hold a cold object (like ice or a cold drink). Splash cold water on your face.\n\n**Mental Grounding**\nCount backwards from 100 by 7s. Name all the counties you can think of. Describe your surroundings in detail.\n\n**Soothing Grounding**\nPicture a safe place in vivid detail. Repeat a comforting phrase. Think of your favourite peaceful memory.\n\nMany officers keep a small "grounding kit" — a textured stone, a photo, or a mint — in their vest pocket for quick access during shift.`,

  "How to talk to my family about PTSD?": `Opening up to family about PTSD can feel incredibly daunting, especially when you're used to being the strong one. Here's guidance based on what has worked for other officers:\n\n**Choosing the Right Moment**\nPick a calm, private time — not during an argument or when stressed. Let them know you'd like to talk about something important.\n\n**Start Small**\nYou don't have to share everything at once. Begin with how you're feeling generally: "I've been finding it harder to switch off after work lately."\n\n**Use "I" Statements**\n"I sometimes feel on edge when..." rather than "You don't understand what I go through."\n\n**Provide Context**\nShare a resource or article about PTSD in policing so they can learn alongside you. The Police Care UK website has excellent family guides.\n\n**Set Boundaries**\nIt's okay to say "I'm not ready to talk about the specific events, but I want you to know I'm getting support."\n\n**Consider Family Therapy**\nMany therapists offer sessions specifically for emergency service families. This can provide a safe, guided space.\n\nRemember: asking for support is a sign of strength, not weakness.`,

  default: `Thank you for reaching out. I'm here to help with any questions about PTSD, mental health support, or coping strategies specific to policing.\n\nI can provide information on:\n• Coping techniques for on and off shift\n• Understanding PTSD symptoms\n• Available support services\n• Connecting with peer support\n\nPlease feel free to ask me anything — this is a safe, confidential space.`,
};

export const suggestedQuestions = [
  "How do I deal with hypervigilance on shift?",
  "What are grounding techniques?",
  "How to talk to my family about PTSD?",
];

// ─── Anonymous Username Options ───
export const usernameOptions = [
  "Officer Fox",
  "Officer Hawk",
  "Officer Wolf",
  "Officer Bear",
  "Officer Eagle",
  "Officer Owl",
  "Officer Stag",
  "Officer Falcon",
];
