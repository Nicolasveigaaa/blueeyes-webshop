const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="] relative h-[50vh] w-full bg-white p-4 text-white">
      <div className="absolute bottom-0 flex justify-between">
        <div></div>
        <div>
          <p>z</p>
        </div>
        <div></div>
      </div>
    </footer>
  );
}
