#!/usr/bin/perl

use strict;
$| = 1;

while (<STDIN>) {
    my ($ldavg1, $ldavg2, $ldavg3) = `uptime` =~ /load average:\s+([.0-9]+),\s+([.0-9]+),\s+([.0-9]+)/;
    print $ldavg1 + 0 . "\n";
}
