import sys
import json
index = 0

json_string=''
messages = []
prefixes = ['fix', 'feat']
update = ''
for i in range(1, len(sys.argv)):
    if i > 0:
        json_string = json_string + sys.argv[i]

arr = json.loads(json_string)

for commit in arr:
    messages.append(commit['message'])

for message in messages:
    if ":" in message:
        prefix = message.split(":")[0]
        if prefix in prefixes:
            if prefix == fix: 
                update = 'minor'
            else:
                update = 'major'
print(update)