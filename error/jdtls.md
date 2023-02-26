[root@yyLinux workspace]# jdtls
Traceback (most recent call last):
  File "/soft/java/jdt-server-1.9//bin/jdtls", line 17, in <module>
    jdtls.main(sys.argv[1:])
  File "/soft/java/jdt-server-1.9/bin/jdtls.py", line 68, in main
    parser.add_argument("--validate-java-version", default=True, action=argparse.BooleanOptionalAction)
AttributeError: module 'argparse' has no attribute 'BooleanOptionalAction'

[root@yyLinux /]# jdtls
Traceback (most recent call last):
  File "/soft/java/jdt-server-1.9//bin/jdtls", line 17, in <module>
    jdtls.main(sys.argv[1:])
  File "/soft/java/jdt-server-1.9/bin/jdtls.py", line 75, in main
    java_executable = get_java_executable(known_args.validate_java_version)
  File "/soft/java/jdt-server-1.9/bin/jdtls.py", line 42, in get_java_executable
    raise Exception("Could not determine Java version")
Exception: Could not determine Java version

[root@yyLinux jdt-server-1.21]# ./bin/jdtls
Traceback (most recent call last):
  File "/soft/java/jdt-server-1.21/./bin/jdtls", line 17, in <module>
    jdtls.main(sys.argv[1:])
  File "/soft/java/jdt-server-1.21/bin/jdtls.py", line 81, in main
    java_executable = get_java_executable(known_args.validate_java_version)
  File "/soft/java/jdt-server-1.21/bin/jdtls.py", line 40, in get_java_executable
    raise Exception("jdtls requires at least Java 17")
