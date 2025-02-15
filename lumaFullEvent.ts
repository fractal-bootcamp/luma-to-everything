type LumaFullEvent = {
    api_id: string;
    accepts_usdc_for_usd: boolean;
    calendar: {
        access_level: string;
        api_id: string;
        avatar_url: string;
        cover_image_url: string;
        description_short: string | null;
        event_submission_restriction: string;
        geo_city: string | null;
        geo_country: string | null;
        geo_latitude: string | null;
        geo_longitude: string | null;
        geo_region: string | null;
        google_measurement_id: string | null;
        instagram_handle: string | null;
        launch_status: string;
        linkedin_handle: string | null;
        luma_plus_active: boolean;
        meta_pixel_id: string | null;
        name: string;
        personal_user_api_id: string;
        refund_policy: string | null;
        slug: string | null;
        social_image_url: string | null;
        stripe_account_id: string | null;
        tax_config: string | null;
        tiktok_handle: string | null;
        timezone: string | null;
        tint_color: string;
        track_meta_ads_from_luma: boolean;
        twitter_handle: string | null;
        verified_at: string | null;
        website: string | null;
        youtube_handle: string | null;
        payment_methods: any[];
        solana_treasury_address: string | null;
        charges_enabled: string | null;
        is_personal: boolean;
    };
    meta_pixel_id: string | null;
    coupon: string | null;
    google_measurement_id: string | null;
    stripe_account_id: string | null;
    payment_methods: any[];
    event: {
        api_id: string;
        calendar_api_id: string;
        cover_url: string;
        end_at: string;
        event_type: string;
        hide_rsvp: boolean;
        location_type: string;
        name: string;
        one_to_one: boolean;
        recurrence_id: string | null;
        show_guest_list: boolean;
        start_at: string;
        timezone: string;
        url: string;
        user_api_id: string;
        visibility: string;
        waitlist_enabled: boolean;
        virtual_info: {
            has_access: boolean;
        };
        geo_longitude: string;
        geo_latitude: string;
        geo_address_info: {
            mode: string;
            city_state: string;
        };
        geo_address_visibility: string;
    };
    featured_guests: {
        name: string;
        bio: string;
        profile_image_url: string;
        social_links: {
            twitter?: string;
            linkedin?: string;
            instagram?: string;
            website?: string;
        }[];
    }[];
    hosts: {
        name: string;
        bio: string;
        profile_image_url: string;
        social_links: {
            twitter?: string;
            linkedin?: string;
            instagram?: string;
            website?: string;
        }[];
    }[];
    ticket_types: {
        api_id: string;
        cents: number | null;
        currency: string | null;
        description: string | null;
        ethereum_token_requirements: any[];
        event_api_id: string;
        is_flexible: boolean;
        is_hidden: boolean;
        max_capacity: number | null;
        min_cents: number | null;
        name: string;
        require_approval: boolean;
        type: string;
        valid_end_at: string | null;
        valid_start_at: string | null;
        position: string;
        num_tickets_registered: number;
        currency_info: any | null;
        num_guests: number;
    }[];
    featured_infos: {
        type: string;
        avatar_url: string;
        tint_color: string;
        name: string;
    }[];
    categories: {
        api_id: string;
        name: string;
        description: string | null;
        color: string | null;
        position: number;
    }[];
    ticket_info: {
        api_id: string;
        cents: number | null;
        currency: string | null;
        description: string | null;
        ethereum_token_requirements: any[];
        event_api_id: string;
        is_flexible: boolean;
        is_hidden: boolean;
        max_capacity: number | null;
        min_cents: number | null;
        name: string;
        require_approval: boolean;
        type: string;
        valid_end_at: string | null;
        valid_start_at: string | null;
        position: string;
        num_tickets_registered: number;
        currency_info: any | null;
        num_guests: number;
    }[];
    description_mirror: {
        type: string;
        content: {
            type: string;
            content: {
                text: string;
                type: string;
                marks?: {
                    type: string;
                }[];
            }[];
        }[];
    };
    registration_questions: {
        api_id: string;
        event_api_id: string;
        question: string;
        question_type: string;
        required: boolean;
        position: number;
        options?: string[];
    }[];
    
};


export const lumaFullEventExample = {
    "api_id": "evt-byoR0WEu1o9XquH",
    "accepts_usdc_for_usd": false,
    "calendar": {
        "access_level": "public",
        "api_id": "cal-2Wd9DU3ifCIIL6f",
        "avatar_url": "https://cdn.lu.ma/avatars-default/community_avatar_12.png",
        "cover_image_url": "https://images.lumacdn.com/calendar-defaults/patterns/dots-100.png",
        "description_short": null,
        "event_submission_restriction": "none",
        "geo_city": null,
        "geo_country": null,
        "geo_latitude": null,
        "geo_longitude": null,
        "geo_region": null,
        "google_measurement_id": null,
        "instagram_handle": null,
        "launch_status": "launched",
        "linkedin_handle": null,
        "luma_plus_active": false,
        "meta_pixel_id": null,
        "name": "Personal",
        "personal_user_api_id": "usr-iqbF0ploQ4vobx8",
        "refund_policy": null,
        "slug": null,
        "social_image_url": null,
        "stripe_account_id": null,
        "tax_config": null,
        "tiktok_handle": null,
        "timezone": null,
        "tint_color": "#F31A7C",
        "track_meta_ads_from_luma": false,
        "twitter_handle": null,
        "verified_at": null,
        "website": null,
        "youtube_handle": null,
        "payment_methods": [],
        "solana_treasury_address": null,
        "charges_enabled": null,
        "is_personal": true
    },
    "meta_pixel_id": null,
    "coupon": null,
    "google_measurement_id": null,
    "stripe_account_id": null,
    "payment_methods": [],
    "event": {
        "api_id": "evt-byoR0WEu1o9XquH",
        "calendar_api_id": "cal-2Wd9DU3ifCIIL6f",
        "cover_url": "https://images.lumacdn.com/gallery-images/cr/7b64d738-0604-403d-b7ff-ed859d97a7bc",
        "end_at": "2025-02-16T00:00:00.000Z",
        "event_type": "independent",
        "hide_rsvp": false,
        "location_type": "offline",
        "name": "AI Agents Hackathon: Building for Social and Marketing Use Cases",
        "one_to_one": true,
        "recurrence_id": null,
        "show_guest_list": true,
        "start_at": "2025-02-15T14:00:00.000Z",
        "timezone": "America/New_York",
        "url": "ebvcq2tv",
        "user_api_id": "usr-iqbF0ploQ4vobx8",
        "visibility": "public",
        "waitlist_enabled": false,
        "virtual_info": {
            "has_access": false
        },
        "geo_longitude": "-73.946721",
        "geo_latitude": "40.715227",
        "geo_address_info": {
            "city": "Kings County",
            "type": "google",
            "region": "New York",
            "address": "Fractal Tech",
            "country": "United States",
            "latitude": "40.7152269",
            "place_id": "ChIJH697J-ZZwokROipt4TKFtPU",
            "longitude": "-73.9467208",
            "city_state": "Kings County, New York",
            "description": "",
            "full_address": "Fractal Tech, 111 Conselyea St Floor 2, Brooklyn, NY 11211, USA",
            "mode": "shown"
        },
        "geo_address_visibility": "public"
    },
    "start_at": "2025-02-15T14:00:00.000Z",
    "guest_data": {
        "ticket_key": null,
        "approval_status": null,
        "proxy_key": null,
        "event_tickets": [],
        "payments": []
    },
    "featured_guests": [
        {
            "api_id": "usr-236Cc4SAdjfTy9c",
            "avatar_url": "https://images.lumacdn.com/avatars/v5/1691d67a-3555-4b77-a131-014861e306fa",
            "bio_short": "I am become program, creator of worlds.",
            "instagram_handle": null,
            "last_online_at": "2025-02-04T20:29:54.869Z",
            "linkedin_handle": "/in/shariqali-dev",
            "name": "Shariq",
            "tiktok_handle": null,
            "timezone": "America/New_York",
            "twitter_handle": null,
            "username": null,
            "website": "https://shariqali.dev",
            "youtube_handle": null
        },
        {
            "api_id": "usr-9ksWWAiZHhUe8WV",
            "avatar_url": "https://images.lumacdn.com/avatars/gi/1a786404-e8b1-4cac-bc22-cde517ce517d",
            "bio_short": null,
            "instagram_handle": null,
            "last_online_at": "2025-02-14T20:20:43.513Z",
            "linkedin_handle": "/in/patrickastarita",
            "name": "PATRICK ASTARITA",
            "tiktok_handle": null,
            "timezone": "America/New_York",
            "twitter_handle": "pastarita27",
            "username": null,
            "website": null,
            "youtube_handle": null
        },
        {
            "api_id": "usr-cBmo8Kmqq4xHZbY",
            "avatar_url": "https://images.lumacdn.com/avatars/qg/13c861d5-dd7d-4168-833c-7b94b4d6cfba",
            "bio_short": "Building great developer experiences",
            "instagram_handle": null,
            "last_online_at": "2025-02-15T14:05:46.530Z",
            "linkedin_handle": "/in/thomas-gauvin",
            "name": "Thomas Gauvin",
            "tiktok_handle": null,
            "timezone": "America/New_York",
            "twitter_handle": "thomasgauvin",
            "username": null,
            "website": "https://thomasgauvin.com",
            "youtube_handle": null
        },
        {
            "api_id": "usr-cGsC1Je7dzO8hL8",
            "avatar_url": "https://images.lumacdn.com/avatars/pl/a8ea5c69-9e98-45c0-a976-a7841e67306a.jpg",
            "bio_short": "I wanna do big good things",
            "instagram_handle": null,
            "last_online_at": "2025-02-15T03:56:03.526Z",
            "linkedin_handle": null,
            "name": "Hejin",
            "tiktok_handle": null,
            "timezone": "America/New_York",
            "twitter_handle": null,
            "username": null,
            "website": null,
            "youtube_handle": null
        },
        {
            "api_id": "usr-DWdY0jFeojXFFRO",
            "avatar_url": "https://images.lumacdn.com/avatars/j6/65cc1861-f027-454a-a8c0-38b140d67439",
            "bio_short": "Product Design, Strategy + UX Research | Interaction Design for Fintech, Cybersecurity, SaaS + Startups | 0- 1 Consultant | Coach + Mentor",
            "instagram_handle": "parastou",
            "last_online_at": "2025-02-15T12:57:59.811Z",
            "linkedin_handle": "/in/pmarashi",
            "name": "Parastou Marashi",
            "tiktok_handle": "parastoumarashi",
            "timezone": "America/New_York",
            "twitter_handle": "Parastou",
            "username": null,
            "website": "https://parastoumarashiUX.com",
            "youtube_handle": "parismarashi"
        },
        {
            "api_id": "usr-J8ZuaqxKy4ipBW6",
            "avatar_url": "https://images.lumacdn.com/avatars/md/d0a00f11-5e48-4e9c-a0a2-f985bfb7cda9",
            "bio_short": "",
            "instagram_handle": "procrasprincess",
            "last_online_at": "2025-02-15T08:58:24.457Z",
            "linkedin_handle": "/in/sarahxiaoweilin",
            "name": "Sarah Lin",
            "tiktok_handle": null,
            "timezone": "America/New_York",
            "twitter_handle": "procrasprinces",
            "username": "procrasprincess",
            "website": "https://github.com/procrasprincess",
            "youtube_handle": ""
        },
        {
            "api_id": "usr-JZCLSSsqjKlpwEc",
            "avatar_url": "https://images.lumacdn.com/avatars/re/ade003cf-6d31-4a25-97f4-9da9c1dfb57d.jpg",
            "bio_short": null,
            "instagram_handle": null,
            "last_online_at": "2025-02-07T22:16:47.426Z",
            "linkedin_handle": "/in/wengmichelle",
            "name": "Michelle",
            "tiktok_handle": null,
            "timezone": "America/New_York",
            "twitter_handle": null,
            "username": "Mykov2",
            "website": null,
            "youtube_handle": ""
        },
        {
            "api_id": "usr-KaXAbwIMs4uIl5G",
            "avatar_url": "https://images.lumacdn.com/avatars/14/3706fa6c-3b08-4dec-ac26-9dbd15c3f80f",
            "bio_short": "founder into nature, startups & trips",
            "instagram_handle": null,
            "last_online_at": "2025-02-14T20:32:17.352Z",
            "linkedin_handle": "/in/dimitry-apollonsky-b7806358",
            "name": "Dimitry Apollonsky",
            "tiktok_handle": null,
            "timezone": "America/New_York",
            "twitter_handle": null,
            "username": null,
            "website": null,
            "youtube_handle": null
        },
        {
            "api_id": "usr-kmHF5GkGgrk5KOO",
            "avatar_url": "https://images.lumacdn.com/avatars/0k/2be5eebb-179e-4e07-b502-fa996b31e640.jpg",
            "bio_short": "Entrepreneur",
            "instagram_handle": null,
            "last_online_at": "2025-02-15T13:36:48.233Z",
            "linkedin_handle": "/in/atif-khan-9a478515b",
            "name": "Atif",
            "tiktok_handle": null,
            "timezone": "America/New_York",
            "twitter_handle": null,
            "username": null,
            "website": null,
            "youtube_handle": null
        },
        {
            "api_id": "usr-ZkGrKW2m4cdaky9",
            "avatar_url": "https://images.lumacdn.com/avatars/u2/4c2b65cd-51a9-434f-a213-8b594c947c4e",
            "bio_short": "MedTech / biopharma strategy; Neuroscience; Mental health; Africa",
            "instagram_handle": null,
            "last_online_at": "2025-02-15T13:12:23.881Z",
            "linkedin_handle": "/in/bisrattwoldemichael",
            "name": "Bisrat",
            "tiktok_handle": null,
            "timezone": "America/New_York",
            "twitter_handle": "Na",
            "username": null,
            "website": null,
            "youtube_handle": null
        }
    ],
    "refund_policy": null,
    "guest_count": 70,
    "ticket_count": 70,
    "hosts": [
        {
            "api_id": "usr-iqbF0ploQ4vobx8",
            "avatar_url": "https://images.lumacdn.com/avatars/m5/4a293f7e-6244-4489-a208-068e39d24f9a.jpg",
            "bio_short": null,
            "instagram_handle": null,
            "last_online_at": "2025-02-15T15:59:51.875Z",
            "linkedin_handle": "/in/faisal-owimer",
            "name": "Faisal Owimer",
            "tiktok_handle": null,
            "timezone": "America/New_York",
            "twitter_handle": null,
            "username": null,
            "website": "https://www.owimer.co/",
            "youtube_handle": "",
            "is_visible": true,
            "access_level": "manager"
        },
        {
            "api_id": "usr-uoY15e94xGxl3wf",
            "avatar_url": "https://cdn.lu.ma/avatars/2a/29a808c6-2e4e-46f6-8c6d-167b1b982883",
            "bio_short": null,
            "instagram_handle": null,
            "last_online_at": "2025-02-15T14:52:31.755Z",
            "linkedin_handle": null,
            "name": "Mostafa ElBermawy",
            "tiktok_handle": null,
            "timezone": "America/New_York",
            "twitter_handle": null,
            "username": null,
            "website": null,
            "youtube_handle": null,
            "is_visible": true,
            "access_level": "manager"
        },
        {
            "api_id": "usr-A05u3O7QO42INXb",
            "avatar_url": "https://images.lumacdn.com/avatars/9l/22fd19ea-aa09-4207-a134-a84f41af3438",
            "bio_short": null,
            "instagram_handle": null,
            "last_online_at": "2025-02-15T14:57:15.407Z",
            "linkedin_handle": "/in/jake-zegil",
            "name": "Jake Zegil",
            "tiktok_handle": null,
            "timezone": "America/New_York",
            "twitter_handle": "JakeZegil",
            "username": null,
            "website": null,
            "youtube_handle": "",
            "is_visible": true,
            "access_level": "manager"
        }
    ],
    "referred_by": null,
    "cover_image": {
        "vibrant_color": null,
        "colors": [
            "#ffe401",
            "#b4999d",
            "#527180",
            "#26351d"
        ]
    },
    "sessions": [],
    "ticket_types": [
        {
            "api_id": "evtticktyp-hJwtNB3TcDHWjDw",
            "cents": null,
            "currency": null,
            "description": null,
            "ethereum_token_requirements": [],
            "event_api_id": "evt-byoR0WEu1o9XquH",
            "is_flexible": false,
            "is_hidden": false,
            "max_capacity": null,
            "min_cents": null,
            "name": "Standard",
            "require_approval": true,
            "type": "free",
            "valid_end_at": null,
            "valid_start_at": null,
            "position": "8",
            "num_tickets_registered": 70,
            "currency_info": null,
            "num_guests": 70
        }
    ],
    "featured_infos": [
        {
            "type": "discover",
            "avatar_url": "https://images.lumacdn.com/discovery/nyc-icon.png",
            "tint_color": "#3ebbd6",
            "name": "New York",
            "api_id": "discplace-Izx1rQVSh8njYpP",
            "name_raw": "New York",
            "path": "/nyc?k=p"
        },
        {
            "type": "calendar",
            "avatar_url": "https://images.lumacdn.com/calendars/o4/9cffd57d-aa26-4ea3-9fdc-37389e52c4e0",
            "name": "Generative AI New York",
            "path": "/genai-ny?k=c",
            "calendar_api_id": "cal-r8BcsXhhHYmA3tp",
            "calendar_type": "calendar_discover"
        }
    ],
    "categories": [
        {
            "api_id": "cat-ai",
            "description": "Join a hackathon, learn about LLMs and prompt engineering, or connect with other AI practitioners.",
            "event_count": 1363,
            "hero_image_desktop_url": "https://images.lumacdn.com/discovery/ai-square.png",
            "icon_url": "https://images.lumacdn.com/discovery/ai-icon.png",
            "name": "AI",
            "page_title": "AI Events",
            "simple_icon_url": "https://images.lumacdn.com/discovery/ai-icon-simple.png",
            "slug": "ai",
            "social_image_url": "https://images.lumacdn.com/discovery/ai-social.png",
            "subscriber_count": 3357,
            "tint_color": "#dd7aa4"
        }
    ],
    "ticket_info": {
        "price": null,
        "is_free": false,
        "max_price": null,
        "is_sold_out": false,
        "spots_remaining": null,
        "is_near_capacity": false,
        "require_approval": true,
        "currency_info": null
    },
    "subscribed_to_calendar": false,
    "event_invite": null,
    "role": null,
    "sold_out": false,
    "locale": "en",
    "theme_meta": {
        "theme": "legacy"
    },
    "tint_color": "#F31A7C",
    "can_register_for_multiple_tickets": false,
    "font_title": "factoria",
    "description_mirror": {
        "type": "doc",
        "content": [
            {
                "type": "paragraph",
                "content": [
                    {
                        "text": "Overview",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "Join us for a groundbreaking hackathon dedicated to creating AI agents for",
                        "type": "text"
                    },
                    {
                        "text": " social media and creators use cases",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "text": ". ",
                        "type": "text"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "text": "Hackathon Focus: ",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "text": "build agents that streamline the creators and social media team workflows and social content publishing, analysis and generation with focus on primarily text modality and images as a secondary modality. ",
                        "type": "text"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "text": "• Develop AI agents that can analyze competitors content",
                        "type": "text"
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "• Identify trends and  social search opportunities",
                        "type": "text"
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "• Generate content and provide insights on accounts performance",
                        "type": "text"
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "Who Should Join?",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "Engineers, AI researchers, designers, and creative technologists passionate about pushing the boundaries of AI-driven content creation. Whether you're a solo innovator or part of a team, this is your chance to redefine brand storytelling through cutting-edge AI.",
                        "type": "text"
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "Sponsors:",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "bullet_list",
                "content": [
                    {
                        "type": "list_item",
                        "content": [
                            {
                                "type": "paragraph",
                                "content": [
                                    {
                                        "text": "NoGood",
                                        "type": "text",
                                        "marks": [
                                            {
                                                "type": "bold"
                                            }
                                        ]
                                    },
                                    {
                                        "text": " – A leading NYC-based growth marketing agency that is behind many category-leading brands including the likes of TikTok, Chime, Oura, Spring Health, and more.",
                                        "type": "text"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list_item",
                        "content": [
                            {
                                "type": "paragraph",
                                "content": [
                                    {
                                        "text": "Goodie AI",
                                        "type": "text",
                                        "marks": [
                                            {
                                                "type": "bold"
                                            }
                                        ]
                                    },
                                    {
                                        "text": " – The pioneering AI Search & Answer Engine Optimization (AEO) platform designed to maximize brand visibility, discovery and growth across LLMs and AI search platforms, including ChatGPT, Perplexity, Gemini, and DeepSeek.",
                                        "type": "text"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "text": "Prizes",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "- Best overall $500",
                        "type": "text"
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "- Second best $150",
                        "type": "text"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "text": "Examples of Agents Ideas to Tackle: ",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "ordered_list",
                "attrs": {
                    "start": {
                        "start": null
                    }
                },
                "content": [
                    {
                        "type": "list_item",
                        "content": [
                            {
                                "type": "paragraph",
                                "content": [
                                    {
                                        "text": "LinkedIn Content Generator for Executives",
                                        "type": "text",
                                        "marks": [
                                            {
                                                "type": "bold"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "bullet_list",
                                "content": [
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Develops ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "quality, industry-specific LinkedIn posts",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " for executives based on:",
                                                        "type": "text"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "bullet_list",
                                                "content": [
                                                    {
                                                        "type": "list_item",
                                                        "content": [
                                                            {
                                                                "type": "paragraph",
                                                                "content": [
                                                                    {
                                                                        "text": "Their ",
                                                                        "type": "text"
                                                                    },
                                                                    {
                                                                        "text": "unique voice, audience interests, and past engagement patterns",
                                                                        "type": "text",
                                                                        "marks": [
                                                                            {
                                                                                "type": "bold"
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "list_item",
                                                        "content": [
                                                            {
                                                                "type": "paragraph",
                                                                "content": [
                                                                    {
                                                                        "text": "Trending topics",
                                                                        "type": "text",
                                                                        "marks": [
                                                                            {
                                                                                "type": "bold"
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "text": " within their industry and specific target accounts and hashtags",
                                                                        "type": "text"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "type": "list_item",
                                                        "content": [
                                                            {
                                                                "type": "paragraph",
                                                                "content": [
                                                                    {
                                                                        "text": "The company’s broader compliance guidelines ",
                                                                        "type": "text"
                                                                    },
                                                                    {
                                                                        "text": "and business goals",
                                                                        "type": "text",
                                                                        "marks": [
                                                                            {
                                                                                "type": "bold"
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Ensures consistency in ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "tone, brand alignment, and performance optimization",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list_item",
                        "content": [
                            {
                                "type": "paragraph",
                                "content": [
                                    {
                                        "text": "AI Social Media Strategy Analyst ",
                                        "type": "text",
                                        "marks": [
                                            {
                                                "type": "bold"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "bullet_list",
                                "content": [
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Continuously scans and monitors competitors' posts",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " across TikTok, Instagram, LinkedIn, and YouTube.",
                                                        "type": "text"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Identifies ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "patterns in high-performing content",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " (topics, formats, engagement triggers)",
                                                        "type": "text"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Outputs ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "real-time, actionable recommendations",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " to optimize content strategy for virality",
                                                        "type": "text"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list_item",
                        "content": [
                            {
                                "type": "paragraph",
                                "content": [
                                    {
                                        "text": "AI Community & Engagement Booster",
                                        "type": "text",
                                        "marks": [
                                            {
                                                "type": "bold"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "bullet_list",
                                "content": [
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Automates and personalizes replies",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " to audience comments on LinkedIn, Twitter, YouTube, and Instagram",
                                                        "type": "text"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Ensures responses are ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "on-brand, aligned with brand tone and personality",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": ", and contextually relevant",
                                                        "type": "text"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Can escalate ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "high-priority interactions",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " to human strategists when needed",
                                                        "type": "text"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list_item",
                        "content": [
                            {
                                "type": "paragraph",
                                "content": [
                                    {
                                        "text": "AI Trend Strategy Generator",
                                        "type": "text",
                                        "marks": [
                                            {
                                                "type": "bold"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "bullet_list",
                                "content": [
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Analyzes ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "trending hashtags, social search queries, and emerging conversations",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " across platforms",
                                                        "type": "text"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Predicts performance trends",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " based on historical data and audience behavior",
                                                        "type": "text"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Auto-generates a ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "customized trend strategy",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " for brands and creators, with ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "recommended content formats and execution tactics",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list_item",
                        "content": [
                            {
                                "type": "paragraph",
                                "content": [
                                    {
                                        "text": "Daily Social & Trend Report Generator",
                                        "type": "text",
                                        "marks": [
                                            {
                                                "type": "bold"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "bullet_list",
                                "content": [
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Automatically ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "aggregates industry trends, competitor insights, and social listening data",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " into an actionable daily report",
                                                        "type": "text"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Aligns report with the ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "brand’s target audience, content focus areas, and engagement objectives",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Suggests ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "data-driven content opportunities",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " and ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "recommended actions",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " for the social team",
                                                        "type": "text"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "list_item",
                        "content": [
                            {
                                "type": "paragraph",
                                "content": [
                                    {
                                        "text": "Multi-Platform AI Content Adapter",
                                        "type": "text",
                                        "marks": [
                                            {
                                                "type": "bold"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "bullet_list",
                                "content": [
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Transforms a ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "single piece of content",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " (e.g., blog post, video script, or LinkedIn post) into ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "optimized formats for different platforms",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Ensures ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "brand consistency",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " while adapting for ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "platform-specific best practices",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " (e.g., shorter text for X, visual storytelling for Instagram, SEO-optimized captions for YouTube)",
                                                        "type": "text"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "list_item",
                                        "content": [
                                            {
                                                "type": "paragraph",
                                                "content": [
                                                    {
                                                        "text": "Auto-generates ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "variations of posts",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": " based on ",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "text": "engagement insights and audience behavior",
                                                        "type": "text",
                                                        "marks": [
                                                            {
                                                                "type": "bold"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "text": "Judging",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "A rubric will be shared during opening talks and posted in Fractal Discord #hackathons channel at kickoff.",
                        "type": "text"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "text": "Team Formation",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "Come with a project or a friend. Need a team? We’ll handle assignments after the opening talks.",
                        "type": "text"
                    }
                ]
            },
            {
                "type": "paragraph",
                "content": [
                    {
                        "text": "Support team",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "The hackathon organizing team will be available to answer any questions throughout the day. ",
                        "type": "text"
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "Schedule",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "• ",
                        "type": "text"
                    },
                    {
                        "text": "8:30am",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "text": " - Doors Open (coffee, mingle) ",
                        "type": "text"
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "• ",
                        "type": "text"
                    },
                    {
                        "text": "9:30am",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "text": " - Hackathon Starts (talks) ",
                        "type": "text"
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "• ",
                        "type": "text"
                    },
                    {
                        "text": "10:00am",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "text": " - Team Assignments, Coding Begins ",
                        "type": "text"
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "• ",
                        "type": "text"
                    },
                    {
                        "text": "1:00pm",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "text": " - Lunch ",
                        "type": "text"
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "• ",
                        "type": "text"
                    },
                    {
                        "text": "6:00pm",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "text": " - Submissions ",
                        "type": "text"
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "• ",
                        "type": "text"
                    },
                    {
                        "text": "6:30pm",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "text": " - Pitches ",
                        "type": "text"
                    },
                    {
                        "type": "hard_break"
                    },
                    {
                        "text": "• ",
                        "type": "text"
                    },
                    {
                        "text": "7:00pm",
                        "type": "text",
                        "marks": [
                            {
                                "type": "bold"
                            }
                        ]
                    },
                    {
                        "text": " - Judging & Prizes",
                        "type": "text"
                    }
                ]
            }
        ]
    },
    "eth_address_requirement": null,
    "name_requirement": "full-name",
    "phone_number_requirement": "optional",
    "solana_address_requirement": null,
    "registration_questions": [
        {
            "id": "jl4q46sm",
            "label": "What is your LinkedIn profile?",
            "required": true,
            "question_type": "linkedin"
        }
    ],
    "is_flagged": false,
    "has_hidden_ticket_types": false
}


export const exampleLumaEventSummary = {
    "api_id": "evt-mYrZPkH6anjZOla",
    "calendar_api_id": "cal-fDd2BLLFzjzFHdH",
    "cover_url": "https://images.lumacdn.com/event-covers/uh/4f0edb1e-697e-4a74-89e3-598f037de2d3",
    "end_at": "2025-03-07T02:00:00.000Z",
    "event_type": "independent",
    "hide_rsvp": false,
    "location_type": "offline",
    "name": "Art Party Returns",
    "one_to_one": true,
    "recurrence_id": null,
    "show_guest_list": true,
    "start_at": "2025-03-06T23:00:00.000Z",
    "timezone": "America/New_York",
    "url": "tv3uetiq",
    "user_api_id": "usr-81cxYH9QLsQZAYl",
    "visibility": "private",
    "waitlist_enabled": false,
    "virtual_info": {
        "has_access": false
    },
    "geo_longitude": "-73.98000",
    "geo_latitude": "40.68000",
    "geo_address_info": {
        "mode": "obfuscated",
        "city_state": "Kings County, New York"
    },
    "geo_address_visibility": "guests-only"
}

