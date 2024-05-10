export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="flex gap-2">
      <p>Cart</p>

      {quantity ? <div className="">({quantity})</div> : null}
    </div>
  );
}
