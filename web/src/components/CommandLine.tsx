import { useCallback, useState } from "react";
import { cn } from "@nous-research/ui/utils";

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
    <code
      className={cn("cursor-pointer", className)}
      onClick={handleClick}
      title={copied ? "Copied!" : `Click to copy: ${command}`}
    >
      {command}
    </code>
  );
}