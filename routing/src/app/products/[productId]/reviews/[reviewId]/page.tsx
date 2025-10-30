export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return (
    <h1>
      Review Details Page product Id {productId} and reviewId {reviewId}
    </h1>
  );
}
