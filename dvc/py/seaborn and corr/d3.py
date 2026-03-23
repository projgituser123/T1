import pandas as pd
df = pd.DataFrame({"dept":["IT","IT","HR","HR","Finance","IT","HR"], "emp":["A","B","C","D","E","F","C"], "salary" : [50000,60000,45000,48000,700000,55000,45000], "exp":[2,3,1,2,5,4,1]})

print(df)
print("===============================")
print(df.groupby("dept")["salary"].apply(lambda x :x.max() - x.min()))
print(df.groupby("dept").nth(0)) # means we are grouping the col of "dept" and finding the first occurence of each of the col data like first occurence of the IT dept is at 0th index and printed its data, similarly for HR, the first occurence of HR dept is at 2nd index and so on for finance...
print(df.groupby("dept").nth(-1)) # gives the last occurence...and its data using the groupby functions
# you can give the dropna parameter inside the .nth()
print(df.groupby("dept").nth([0,-1])) #nth([0, -1]) returns both the first (0th) and last (-1) row of each group. 
print(df.groupby("dept").nth([0,-1,1])) # will give the whole table itself... because we are trying to fetch the data of 0th , first and last occurence...


# on the basis of dept make a new col saying whether the employee is a high or low earner
print("===============================")
def label_sal(g):
    g["high_earner"] = g["salary"] > g["salary"].mean() #eventhough it looks like a if-else statements but you can write like this.... this will store true or false acc to condition written...
    return g
res = df.groupby("dept").apply(label_sal)
salmean = df.groupby("dept")["salary"].mean()
print(salmean)
print(res)
print("describe using groupby = ", df.groupby("dept").describe())
print("to show the groups = ", df.groupby("dept").groups) #it returns the object or the key value pair of dept via groupby function and its index number...
print()