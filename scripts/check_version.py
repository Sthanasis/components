import sys
import json
index = 0

json_string=''
messages = []
for i in range(1, len(sys.argv)):
    if i > 0:
        json_string = json_string + sys.argv[i]

arr = json.loads(json_string)

for commit in arr:
    print(commit['message'])

print(type(arr))