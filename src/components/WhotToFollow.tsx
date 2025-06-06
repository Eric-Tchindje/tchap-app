import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import { getRecommandedUsers } from "@/actions/user.action";
import FollowButton from "./FollowButton";

async function WhoToFollow() {
  const users = await getRecommandedUsers();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Who to Follow</CardTitle>
      </CardHeader>
      <CardContent>
        {users.length === 0 ? (
          <div>No body to Follow</div>
        ) : (
          <div className="space-y-4">
            {users.map(user => WhoToFollwCardContent(user))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
export default WhoToFollow;

type FollowCardProps = {
  name: string | null;
  id: string;
  username: string;
  image: string | null;
  _count: { followers: number };
};

const WhoToFollwCardContent = (user: FollowCardProps) => {
  return (
    <div key={user.id} className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-1">
        <Link href={`/profile/${user.username}`}>
          <Avatar>
            <AvatarImage src={user.image ?? "/avatar.png"} />
          </Avatar>
        </Link>
        <div className="text-xs">
          <Link
            href={`/profile/${user.username}`}
            className="cursor-pointer font-medium"
          >
            {user.name}
          </Link>
          <p className="text-muted-foreground">@{user.username}</p>
          <p className="text-muted-foreground">
            {user._count.followers} followers
          </p>
        </div>
      </div>
      <FollowButton userId={user.id} />
    </div>
  );
};
