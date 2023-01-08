import sys
import json
index = 0
arr=[]
json_string=''
messages = []
for i in range(1, len(sys.argv)):
    if i > 0:
        json_string = json_string + sys.argv[i]

for i in range(len(arr)):
    print(arr[i])
    if arr[i] == 'message':
        index = i + 2
    if i == index: 
        messages.append(arr[i])
print(json_string)