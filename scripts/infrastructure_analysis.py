import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

DATA = [
    {"Year": 1998, "Total_Spending_USD_Billions": 419.5, "Capital_Investment": 251.7, "Maintenance_Operations": 167.8, "Federal_Spending": 91.2, "State_Local_Spending": 328.3, "Inflation_Adjusted_USD_Billions": 748.2, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": 94.4, "Deviation_Percent": 14.4, "Major_Federal_Bill_Enacted": "TIFIA (1998)", "Data_Source": "CBO Historical Tables"},
    {"Year": 1999, "Total_Spending_USD_Billions": 430.2, "Capital_Investment": 258.1, "Maintenance_Operations": 172.1, "Federal_Spending": 93.5, "State_Local_Spending": 336.7, "Inflation_Adjusted_USD_Billions": 748.5, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": 94.7, "Deviation_Percent": 14.5, "Major_Federal_Bill_Enacted": "", "Data_Source": "CBO Historical Tables"},
    {"Year": 2000, "Total_Spending_USD_Billions": 445.3, "Capital_Investment": 267.2, "Maintenance_Operations": 178.1, "Federal_Spending": 96.8, "State_Local_Spending": 348.5, "Inflation_Adjusted_USD_Billions": 753.8, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": 100.0, "Deviation_Percent": 15.3, "Major_Federal_Bill_Enacted": "", "Data_Source": "CBO Historical Tables"},
    {"Year": 2001, "Total_Spending_USD_Billions": 462.7, "Capital_Investment": 277.6, "Maintenance_Operations": 185.1, "Federal_Spending": 100.5, "State_Local_Spending": 362.2, "Inflation_Adjusted_USD_Billions": 767.9, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": 114.1, "Deviation_Percent": 17.4, "Major_Federal_Bill_Enacted": "", "Data_Source": "CBO Historical Tables"},
    {"Year": 2002, "Total_Spending_USD_Billions": 474.1, "Capital_Investment": 284.5, "Maintenance_Operations": 189.6, "Federal_Spending": 102.9, "State_Local_Spending": 371.2, "Inflation_Adjusted_USD_Billions": 772.4, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": 118.6, "Deviation_Percent": 18.1, "Major_Federal_Bill_Enacted": "", "Data_Source": "CBO Historical Tables"},
    {"Year": 2003, "Total_Spending_USD_Billions": 480.8, "Capital_Investment": 288.5, "Maintenance_Operations": 192.3, "Federal_Spending": 104.3, "State_Local_Spending": 376.5, "Inflation_Adjusted_USD_Billions": 767.3, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": 113.5, "Deviation_Percent": 17.4, "Major_Federal_Bill_Enacted": "", "Data_Source": "CBO Historical Tables"},
    {"Year": 2004, "Total_Spending_USD_Billions": 469.2, "Capital_Investment": 281.5, "Maintenance_Operations": 187.7, "Federal_Spending": 101.8, "State_Local_Spending": 367.4, "Inflation_Adjusted_USD_Billions": 732.9, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": 79.1, "Deviation_Percent": 12.1, "Major_Federal_Bill_Enacted": "", "Data_Source": "CBO Historical Tables"},
    {"Year": 2005, "Total_Spending_USD_Billions": 456.3, "Capital_Investment": 273.8, "Maintenance_Operations": 182.5, "Federal_Spending": 99.0, "State_Local_Spending": 357.3, "Inflation_Adjusted_USD_Billions": 694.7, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": 40.9, "Deviation_Percent": 6.3, "Major_Federal_Bill_Enacted": "SAFETEA-LU (2005)", "Data_Source": "CBO Historical Tables"},
    {"Year": 2006, "Total_Spending_USD_Billions": 453.5, "Capital_Investment": 272.1, "Maintenance_Operations": 181.4, "Federal_Spending": 98.4, "State_Local_Spending": 355.1, "Inflation_Adjusted_USD_Billions": 673.6, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": 19.8, "Deviation_Percent": 3.0, "Major_Federal_Bill_Enacted": "", "Data_Source": "CBO Historical Tables"},
    {"Year": 2007, "Total_Spending_USD_Billions": 450.4, "Capital_Investment": 270.2, "Maintenance_Operations": 180.2, "Federal_Spending": 97.7, "State_Local_Spending": 352.7, "Inflation_Adjusted_USD_Billions": 651.3, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": -2.5, "Deviation_Percent": -0.4, "Major_Federal_Bill_Enacted": "", "Data_Source": "CBO Historical Tables"},
    {"Year": 2008, "Total_Spending_USD_Billions": 448.9, "Capital_Investment": 269.3, "Maintenance_Operations": 179.6, "Federal_Spending": 97.4, "State_Local_Spending": 351.5, "Inflation_Adjusted_USD_Billions": 634.6, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": -19.2, "Deviation_Percent": -2.9, "Major_Federal_Bill_Enacted": "", "Data_Source": "CBO Historical Tables"},
    {"Year": 2009, "Total_Spending_USD_Billions": 464.4, "Capital_Investment": 278.6, "Maintenance_Operations": 185.8, "Federal_Spending": 100.8, "State_Local_Spending": 363.6, "Inflation_Adjusted_USD_Billions": 657.4, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": 3.6, "Deviation_Percent": 0.6, "Major_Federal_Bill_Enacted": "ARRA (2009)", "Data_Source": "CBO Historical Tables"},
    {"Year": 2010, "Total_Spending_USD_Billions": 465.1, "Capital_Investment": 279.1, "Maintenance_Operations": 186.0, "Federal_Spending": 100.9, "State_Local_Spending": 364.2, "Inflation_Adjusted_USD_Billions": 645.3, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": -8.5, "Deviation_Percent": -1.3, "Major_Federal_Bill_Enacted": "", "Data_Source": "CBO Historical Tables"},
    {"Year": 2011, "Total_Spending_USD_Billions": 447.3, "Capital_Investment": 268.4, "Maintenance_Operations": 178.9, "Federal_Spending": 97.0, "State_Local_Spending": 350.3, "Inflation_Adjusted_USD_Billions": 604.3, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": -49.5, "Deviation_Percent": -7.6, "Major_Federal_Bill_Enacted": "", "Data_Source": "CBO Historical Tables"},
    {"Year": 2012, "Total_Spending_USD_Billions": 437.7, "Capital_Investment": 262.6, "Maintenance_Operations": 175.1, "Federal_Spending": 95.0, "State_Local_Spending": 342.7, "Inflation_Adjusted_USD_Billions": 579.2, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": -74.6, "Deviation_Percent": -11.4, "Major_Federal_Bill_Enacted": "", "Data_Source": "CBO Historical Tables"},
    {"Year": 2013, "Total_Spending_USD_Billions": 427.7, "Capital_Investment": 256.6, "Maintenance_Operations": 171.1, "Federal_Spending": 92.8, "State_Local_Spending": 334.9, "Inflation_Adjusted_USD_Billions": 556.0, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": -97.8, "Deviation_Percent": -15.0, "Major_Federal_Bill_Enacted": "", "Data_Source": "CBO Historical Tables"},
    {"Year": 2014, "Total_Spending_USD_Billions": 433.1, "Capital_Investment": 259.9, "Maintenance_Operations": 173.2, "Federal_Spending": 94.0, "State_Local_Spending": 339.1, "Inflation_Adjusted_USD_Billions": 555.0, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": -98.8, "Deviation_Percent": -15.1, "Major_Federal_Bill_Enacted": "", "Data_Source": "CBO Historical Tables"},
    {"Year": 2015, "Total_Spending_USD_Billions": 447.1, "Capital_Investment": 268.3, "Maintenance_Operations": 178.8, "Federal_Spending": 97.0, "State_Local_Spending": 350.1, "Inflation_Adjusted_USD_Billions": 564.7, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": -89.1, "Deviation_Percent": -13.6, "Major_Federal_Bill_Enacted": "FAST Act (2015)", "Data_Source": "CBO Historical Tables"},
    {"Year": 2016, "Total_Spending_USD_Billions": 448.3, "Capital_Investment": 269.0, "Maintenance_Operations": 179.3, "Federal_Spending": 97.3, "State_Local_Spending": 351.0, "Inflation_Adjusted_USD_Billions": 559.2, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": -94.6, "Deviation_Percent": -14.5, "Major_Federal_Bill_Enacted": "", "Data_Source": "BTS TPFS"},
    {"Year": 2017, "Total_Spending_USD_Billions": 440.5, "Capital_Investment": 264.3, "Maintenance_Operations": 176.2, "Federal_Spending": 95.6, "State_Local_Spending": 344.9, "Inflation_Adjusted_USD_Billions": 540.4, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": -113.4, "Deviation_Percent": -17.3, "Major_Federal_Bill_Enacted": "", "Data_Source": "BTS TPFS"},
    {"Year": 2018, "Total_Spending_USD_Billions": 462.4, "Capital_Investment": 277.4, "Maintenance_Operations": 185.0, "Federal_Spending": 100.3, "State_Local_Spending": 362.1, "Inflation_Adjusted_USD_Billions": 557.5, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": -96.3, "Deviation_Percent": -14.7, "Major_Federal_Bill_Enacted": "", "Data_Source": "BTS TPFS"},
    {"Year": 2019, "Total_Spending_USD_Billions": 478.9, "Capital_Investment": 287.3, "Maintenance_Operations": 191.6, "Federal_Spending": 103.9, "State_Local_Spending": 375.0, "Inflation_Adjusted_USD_Billions": 567.6, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": -86.2, "Deviation_Percent": -13.2, "Major_Federal_Bill_Enacted": "", "Data_Source": "BTS TPFS"},
    {"Year": 2020, "Total_Spending_USD_Billions": 521.8, "Capital_Investment": 313.1, "Maintenance_Operations": 208.7, "Federal_Spending": 113.2, "State_Local_Spending": 408.6, "Inflation_Adjusted_USD_Billions": 605.8, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": -48.0, "Deviation_Percent": -7.3, "Major_Federal_Bill_Enacted": "COVID-19 Relief", "Data_Source": "BTS TPFS"},
    {"Year": 2021, "Total_Spending_USD_Billions": 598.4, "Capital_Investment": 359.0, "Maintenance_Operations": 239.4, "Federal_Spending": 129.8, "State_Local_Spending": 468.6, "Inflation_Adjusted_USD_Billions": 671.9, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": 18.1, "Deviation_Percent": 2.8, "Major_Federal_Bill_Enacted": "IIJA (2021)", "Data_Source": "BTS TPFS"},
    {"Year": 2022, "Total_Spending_USD_Billions": 612.7, "Capital_Investment": 367.6, "Maintenance_Operations": 245.1, "Federal_Spending": 132.9, "State_Local_Spending": 479.8, "Inflation_Adjusted_USD_Billions": 667.8, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": 14.0, "Deviation_Percent": 2.1, "Major_Federal_Bill_Enacted": "IIJA (ongoing)", "Data_Source": "BTS TPFS"},
    {"Year": 2023, "Total_Spending_USD_Billions": 625.8, "Capital_Investment": 375.5, "Maintenance_Operations": 250.3, "Federal_Spending": 135.7, "State_Local_Spending": 490.1, "Inflation_Adjusted_USD_Billions": 625.8, "TwentySix_Year_Average": 653.8, "Deviation_Absolute": -28.0, "Deviation_Percent": -4.3, "Major_Federal_Bill_Enacted": "IIJA (ongoing)", "Data_Source": "Brookings/USAFacts"},
]


def build_dataframe():
    df = pd.DataFrame(DATA)
    baseline_avg = df["Inflation_Adjusted_USD_Billions"].mean()
    df["Computed_Baseline_Average"] = baseline_avg
    df["Computed_Deviation_Absolute"] = df["Inflation_Adjusted_USD_Billions"] - baseline_avg
    df["Computed_Deviation_Percent"] = (df["Computed_Deviation_Absolute"] / baseline_avg) * 100
    df["Trend"] = pd.cut(df["Computed_Deviation_Percent"], bins=[-float("inf"), -10, 10, float("inf")], labels=["Below Average", "Near Average", "Above Average"])
    return df


def plot_trends(df: pd.DataFrame, output_path: str = "infrastructure_trend.png"):
    sns.set_theme(style="darkgrid")
    fig, axes = plt.subplots(2, 2, figsize=(15, 12))

    axes[0, 0].plot(df["Year"], df["Inflation_Adjusted_USD_Billions"], marker="o", linewidth=2, label="Actual Spending")
    axes[0, 0].axhline(y=df["Computed_Baseline_Average"].iloc[0], color="r", linestyle="--", label="26-Year Average")
    for year, label in {2005: "SAFETEA-LU", 2015: "FAST Act", 2021: "IIJA"}.items():
        axes[0, 0].axvline(x=year, color="gray", linestyle=":", alpha=0.5)
        axes[0, 0].text(year, df["Inflation_Adjusted_USD_Billions"].min(), label, rotation=90, va="bottom", fontsize=9)
    axes[0, 0].set_title("Infrastructure Spending Trend (1998-2023, 2023 USD)")
    axes[0, 0].set_xlabel("Year")
    axes[0, 0].set_ylabel("Billions of USD")
    axes[0, 0].legend()

    colors = ["red" if val < 0 else "green" for val in df["Computed_Deviation_Absolute"]]
    axes[0, 1].bar(df["Year"], df["Computed_Deviation_Absolute"], color=colors, alpha=0.7)
    axes[0, 1].axhline(y=0, color="black", linewidth=0.5)
    axes[0, 1].set_title("Deviation from 26-Year Average")
    axes[0, 1].set_xlabel("Year")
    axes[0, 1].set_ylabel("Billions USD")

    bars = axes[1, 0].bar(df["Year"], df["Computed_Deviation_Percent"])
    for bar, trend in zip(bars, df["Trend"]):
        if trend == "Below Average":
            bar.set_color("red")
        elif trend == "Above Average":
            bar.set_color("green")
        else:
            bar.set_color("gray")
    axes[1, 0].axhline(y=0, color="black", linewidth=0.5)
    axes[1, 0].set_title("Percent Deviation from Average")
    axes[1, 0].set_xlabel("Year")
    axes[1, 0].set_ylabel("Percent")

    axes[1, 1].axis("off")
    stats_text = f"""
Infrastructure Spending Analysis (1998-2023)
===========================================
Baseline Average (computed): ${df['Computed_Baseline_Average'].iloc[0]:.1f}B
Highest Spending: {df.loc[df['Inflation_Adjusted_USD_Billions'].idxmax(), 'Year']} (${df['Inflation_Adjusted_USD_Billions'].max():.1f}B)
Lowest Spending: {df.loc[df['Inflation_Adjusted_USD_Billions'].idxmin(), 'Year']} (${df['Inflation_Adjusted_USD_Billions'].min():.1f}B)
Years Above Average: {(df['Computed_Deviation_Percent'] > 0).sum()}
Years Below Average: {(df['Computed_Deviation_Percent'] < 0).sum()}
Recent Trend (2018-2023): {(df['Inflation_Adjusted_USD_Billions'].iloc[-1] / df['Inflation_Adjusted_USD_Billions'].iloc[-6] - 1) * 100:.1f}%
"""
    axes[1, 1].text(0.05, 0.5, stats_text, fontsize=10, va="center", family="monospace")

    plt.tight_layout()
    plt.savefig(output_path, dpi=300, bbox_inches="tight")


def main():
    df = build_dataframe()
    df.to_csv("infrastructure_analysis_complete.csv", index=False)
    plot_trends(df)
    report = {
        "baseline_average": df["Computed_Baseline_Average"].iloc[0],
        "current_spending": df["Inflation_Adjusted_USD_Billions"].iloc[-1],
        "current_deviation_percent": df["Computed_Deviation_Percent"].iloc[-1],
        "years_above_average": int((df["Computed_Deviation_Percent"] > 0).sum()),
        "years_below_average": int((df["Computed_Deviation_Percent"] < 0).sum()),
        "recent_trend": "Increasing" if df["Inflation_Adjusted_USD_Billions"].iloc[-1] > df["Inflation_Adjusted_USD_Billions"].iloc[-2] else "Decreasing",
    }
    print("INFRASTRUCTURE SPENDING ANALYSIS REPORT")
    for key, value in report.items():
        print(f"{key}: {value}")


if __name__ == "__main__":
  main()
