"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"
import type { TooltipContentProps } from "recharts"

import { cn } from "@/lib/utils"

export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
    color?: string
    theme?: {
      light?: string
      dark?: string
    }
  }
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const colorConfig = Object.entries(config).filter(([, value]) => value.color || value.theme)

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          [data-chart="${id}"] {
            ${colorConfig
              .map(([key, value]) => {
                const color = value.theme?.light || value.color
                return color ? `--color-${key}: ${color};` : ""
              })
              .join("\n")}
          }

          .dark [data-chart="${id}"] {
            ${colorConfig
              .map(([key, value]) => {
                const color = value.theme?.dark || value.theme?.light || value.color
                return color ? `--color-${key}: ${color};` : ""
              })
              .join("\n")}
          }
        `,
      }}
    />
  )
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"]
}) {
  const uniqueId = React.useId().replace(/:/g, "")
  const chartId = `chart-${id || uniqueId}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-base-content/60 [&_.recharts-cartesian-grid_line]:stroke-base-300 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-base-content/20 [&_.recharts-legend-item-text]:text-base-content [&_.recharts-layer]:outline-none [&_.recharts-sector]:outline-none [&_.recharts-surface]:overflow-visible",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  labelKey,
  nameKey,
}: TooltipContentProps<number | string, string> & {
  className?: string
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: "line" | "dot"
  labelKey?: string
  nameKey?: string
}) {
  const { config } = useChart()

  if (!active || !payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        "grid min-w-[10rem] gap-2 rounded-xl border border-base-300 bg-base-100/95 px-3 py-2 text-sm shadow-md backdrop-blur",
        className
      )}
    >
      {!hideLabel ? <div className="font-medium text-base-content">{label}</div> : null}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = String(nameKey ? item.payload?.[nameKey] : item.dataKey ?? item.name ?? index)
          const itemConfig = config[key] ?? config[String(item.dataKey)] ?? {}
          const itemLabel =
            itemConfig.label ??
            (typeof item.name === "string" || typeof item.name === "number"
              ? item.name
              : typeof labelKey === "string"
                ? labelKey
                : typeof item.dataKey === "string" || typeof item.dataKey === "number"
                  ? item.dataKey
                  : "")

          return (
            <div key={key} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {!hideIndicator ? (
                  <span
                    className={cn("inline-block shrink-0 rounded-full", indicator === "dot" ? "size-2.5" : "h-0.5 w-3")}
                    style={{ backgroundColor: item.color }}
                  />
                ) : null}
                <span className="text-base-content/70">
                  {itemLabel}
                </span>
              </div>
              <span className="font-medium text-base-content">
                {item.value}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  className,
  payload,
  nameKey,
}: React.ComponentProps<"div"> & {
  payload?: ReadonlyArray<any>
  nameKey?: string
}) {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-4 pt-2", className)}>
      {payload.map((item) => {
        const key = String(nameKey ? item.payload?.[nameKey] : item.dataKey ?? item.value)
        const itemConfig = config[key] ?? config[String(item.dataKey)] ?? {}

        return (
          <div key={key} className="flex items-center gap-2">
            <span
              className="size-2.5 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-base-content/70">
              {itemConfig.label ?? item.value}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
}
