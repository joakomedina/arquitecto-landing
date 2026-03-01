import { useEffect } from "react";

export function SEO({ title, description, keywords }) {
    useEffect(() => {
        // Update Title
        document.title = title;

        // Helper to update meta tags
        const updateMeta = (name, content) => {
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                element = document.createElement("meta");
                element.setAttribute("name", name);
                document.head.appendChild(element);
            }
            element.setAttribute("content", content);
        };

        if (description) {
            updateMeta("description", description);
        }

        if (keywords) {
            updateMeta("keywords", keywords);
        }

        // Cleanup not strictly necessary for a single page app where we want these to persist,
        // but good practice if we had multiple pages.
    }, [title, description, keywords]);

    return null;
}
