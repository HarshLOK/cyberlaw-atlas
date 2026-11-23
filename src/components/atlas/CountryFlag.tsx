import { flagUrl } from "@/data/countries";
import type { Country } from "@/data/types";
import { cn } from "@/lib/utils";

export function CountryFlag({
  country,
  className,
  size = 320,
}: {
  country: Pick<Country, "isoCode" | "name">;
  className?: string;
  size?: 160 | 320 | 640;
}) {
  return (
    <img
      src={flagUrl(country.isoCode, size)}
      srcSet={`${flagUrl(country.isoCode, size)} 1x, ${flagUrl(country.isoCode, size === 160 ? 320 : 640)} 2x`}
      alt={`Flag of ${country.name}`}
      loading="lazy"
      decoding="async"
      className={cn("block object-cover", className)}
    />
  );
}
