
import OverAllInsightsWrapper from "@/components/pageWrappers/OverAllInsightsWrapper"
import RestockNotifications from "@/components/notifications/restockNotifications/RestockNotifications"

export default function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <OverAllInsightsWrapper />
                </div>
                <div className="col-lg-4">
                    <RestockNotifications />
                </div>
            </div>
        </div>
    )
}