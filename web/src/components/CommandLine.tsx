import { useCallback, useState } from "react";
import { cn } from "@nous-research/ui/utils";
import { Check, Copy } from "lucide-react";

interface CommandLineProps {
  command: string;
  className?: string;
}

export function CommandLine({ command, className }: CommandLineProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(() => {
    void navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [command]);

  return (
    <span
      className={cn(
        "relative inline-flex items-center gap-0.5 cursor-pointer",
        "rounded transition-colors",
        "px-1 mx-0.5",
        "hover:bg-secondary/60",
        className,
      )}
      onClick={handleClick}
      title={copied ? "Copied!" : `Click to copy: ${command}`}
    >
      <code className="bg-transparent text-inherit">{command}</code>
      {copied ? (
        <Check className="h-3 w-3 shrink-0 text-success" />
      ) : (
        <Copy className="h-3 w-3 shrink-0 text-text-tertiary" />
      )}
    </span>
  );
}