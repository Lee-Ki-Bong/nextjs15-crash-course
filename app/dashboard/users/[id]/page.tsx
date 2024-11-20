const User = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>User Detail id: {id}</div>;
};

export default User;
