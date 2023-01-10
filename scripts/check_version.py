import sys
import os
import json

def get_current_version():
    path = os.getcwd()
    json_file = open(path + "/package.json")
    pckg_json = json.load(json_file)
    version = pckg_json['version']
    print(version)
    json_file.close()
    return version

version = get_current_version()

index = 0
json_string=''
messages = []
prefixes = ['breaking', 'fix', 'feat']

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
            v = list(version)
            if prefix == 'fix': 
                v[3] = str(int(v[4]) +1)
            elif prefix == 'feat':
                v[2] = str(int(v[2]) +1)
            else: 
               v[0] = str(int(v[0]) +1)
            version = str().join(v)
print(version)