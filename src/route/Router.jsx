import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import LiveScorePage from "../pages/LiveScorePage";
import ScoreBoardPage from "../pages/ScoreBoardPage";
import LivePage from "../pages/LivePage";
import ProfilePage from "../pages/ProfilePage";
import TeamPage from "../pages/TeamPage";
import NewsPage2 from "../pages/NewsPage2";
import Hilight from "../pages/Hilight";


const router = createBrowserRouter([
    {
        path: `/`,
        element: <Layout />,
        children: [
            { path: ``, element: <HomePage /> },
            { path: `news`, element: <NewsPage /> },
            { path: `news/:newsId`, element: <NewsPage2 /> },
            { path: `livescore`, element: <LiveScorePage /> },
            { path: `scoreboard`, element: <ScoreBoardPage /> },
            { path: `live`, element: <LivePage /> },
            { path: `hilight/:videoId`, element: <Hilight /> },
            { path: `profile/:profileId`, element: <ProfilePage /> },
            { path: `team/:teamName`, element: <TeamPage /> },
        ],
    },
]);

export default function Router() {
    return (
            <RouterProvider router={router} />
    );
}