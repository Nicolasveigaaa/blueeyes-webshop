import clsx from 'clsx';

const Price = ({
  amount,
  className,
  currencyCode = 'DKK',
  currencyCodeClassName
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} className={className}>
    <span className={clsx('mr-1 inline', currencyCodeClassName)}>{`${currencyCode}`}</span>
    {`${new Intl.NumberFormat(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(parseFloat(amount))}`}
  </p>
);

export default Price;
