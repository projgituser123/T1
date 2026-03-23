import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plot
import plotly.express as px
import plotly.io as pio
pio.renderers.default = "notebook"

#heatmap...
df1 = pd.DataFrame({"maths" : [80,70,60,30], "sci" : [76,90,45,64], "english" : [87,81,73,61], "hindi":[76,54,45,87]},index=["A","B","C","D"])
print(df1)
#sns.heatmap(df1, vmin=40, vmax=100, cmap="YlGnBu", linewidths=1, linecolor="white", annot=True, cbar=True )
#sns.boxplot(x="maths", y="sci",hue="english", data=df1)

df = pd.DataFrame({"dept":["IT","IT","HR","HR","Finance","IT","HR"], "emp":["A","B","C","D","E","F","C"], "salary" : [50000,60000,45000,48000,700000,55000,45000], "exp":[2,3,1,2,5,4,1], "gender" : ["F","M","M","F","M","F","F"]})
fig = px.bar(df, x="dept", y="salary", title="dept vs salary")
#plot.show()
fig.show()