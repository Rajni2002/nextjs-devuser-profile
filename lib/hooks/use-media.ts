import * as React from "react";

export default function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = React.useState(false);
    React.useEffect(() => {
        const matchQueryList = window.matchMedia(query);
        function handleChange(e: MediaQueryListEvent) {
            setMatches(e.matches);
        }
        matchQueryList.addEventListener("change", handleChange);
        return () => {
            matchQueryList.removeEventListener("change", handleChange);
        };
    }, [query]);
    return matches;
}