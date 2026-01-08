import { Book, Github, MessageSquare, Box, FileText, Youtube, AlertTriangle } from 'lucide-react';

export const primaryResources = [
    {
        title: "Official Documentation",
        description: "Comprehensive API reference and guides for IxNetwork.",
        url: "https://docs.keysight.com/display/IXNETWORK/IxNetwork+Home",
        icon: Book,
        color: "bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]"
    },
    {
        title: "Code Repository",
        description: "Sample scripts and automation examples on GitHub.",
        url: "https://github.com/OpenIxia",
        icon: Github,
        color: "bg-obsidian-2 text-obsidian-textPrimary border border-obsidian-3"
    },
    {
        title: "Community Support",
        description: "Join the discussion on forums and get help from experts.",
        url: "https://forums.ixiacom.com/",
        icon: MessageSquare,
        color: "bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.1)]"
    }
];

export const helpfulLinks = [
    {
        title: "IxNetwork REST API Guide",
        url: "https://docs.keysight.com/display/IXNETWORK/IxNetwork+REST+API",
        category: "Documentation",
        icon: FileText
    },
    {
        title: "ixnetwork_restpy on PyPI",
        url: "https://pypi.org/project/ixnetwork-restpy/",
        category: "Package",
        icon: Box
    },
    {
        title: "Release Notes",
        url: "https://docs.keysight.com/display/IXNETWORK/Release+Notes",
        category: "Updates",
        icon: FileText
    },
    {
        title: "Troubleshooting Common Issues",
        url: "https://docs.keysight.com/display/IXNETWORK/Troubleshooting",
        category: "Support",
        icon: AlertTriangle
    },
    {
        title: "Video Tutorial Playlist",
        url: "https://www.youtube.com/user/IxiaVideo",
        category: "Learning",
        icon: Youtube
    }
];
