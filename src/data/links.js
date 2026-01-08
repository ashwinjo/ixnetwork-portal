import { Book, Github, MessageSquare, Box, FileText, Youtube, AlertTriangle } from 'lucide-react';

export const primaryResources = [
    {
        title: "Official Documentation",
        description: "Comprehensive API reference and guides for IxNetwork.",
        url: "https://docs.keysight.com/display/IXNETWORK/IxNetwork+Home",
        icon: Book,
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Code Repository",
        description: "Sample scripts and automation examples on GitHub.",
        url: "https://github.com/OpenIxia",
        icon: Github,
        color: "bg-slate-100 text-slate-800"
    },
    {
        title: "Community Support",
        description: "Join the discussion on forums and get help from experts.",
        url: "https://forums.ixiacom.com/",
        icon: MessageSquare,
        color: "bg-indigo-100 text-indigo-600"
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
