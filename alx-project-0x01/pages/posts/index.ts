import header from "@/components/layout/Header";

const Posts: React.FC = () => {
	return (
		<div className="flex flex-col h-screen">
		<Header />
		<main className="flex-grow p-8 bg-gray-50">
		<h1 className="text-3xl">Posts Page</h1>
		</div>
	);
};

export default Posts;
