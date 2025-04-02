// UserList 컴포넌트가 받을 prop 타입 정의
interface UserListProps {
    users: { id: number; name: string }[];
}

export default function UserList({ users }: UserListProps) {
    return (
    // ul / li 와 array.map을 이용해서 유저 리스트 나타내기
    );
}
