import sys
import json
index = 0
arr=[]
for i in range(1, len(sys.argv)):
    if i > 0:
        arr.append(sys.argv[i])
print(arr)
