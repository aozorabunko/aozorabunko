#!/usr/bin/perl -w

# モジュール読み込み
use strict;
use CGI;
use File::Temp;
use File::Find;
use Time::Piece;
use File::Copy;

our @filelist = ();


# オブジェクト作成
my $query = CGI->new;
# ユーザ名取得
my $user=$ENV{'REMOTE_USER'};

# ファイル取得
my $output_directory = "/home/aozora-bunko/www/txt2xhtml/output/$user/";
my $input_directory = "/home/aozora-bunko/www/txt2xhtml/input/$user/";

# HTML出力
print $query->header(-charset=>'Shift_JIS'),
      $query->start_html(-lang=>'ja', -encoding=>'Shift_JIS', -title=>'txt2xhtml');

print "<h2>ファイルリスト<\/h2>";
print "<p>ここでは、作業ファイルの掃除と画像ファイル等のアップロードができます<\/p>";


print "<h3>アップロード<\/h3>";
my $upload_filename = $query->param('uploadfile');
if ($upload_filename)
{
print "Uploading file ... $upload_filename";
# ファイル取得
my $fH = $query->upload('uploadfile');
my ($buffer);
# MIMEタイプ取得
my $mimetype = $query->uploadInfo($fH)->{'Content-Type'};
my $tmp_filename = "$output_directory/$upload_filename";
# ファイル保存
open (OUT, ">$tmp_filename") || die "Can't open input file!";
binmode (OUT);
while(read($fH, $buffer, 1024)){
    print OUT $buffer;
}
close (OUT);
close ($fH) if ($CGI::OS ne 'UNIX'); # Windowsプラットフォーム用
chmod (0666, $tmp_filename);
}

print $query->start_form;
print $query->filefield('-name' => 'uploadfile');
print $query->submit('-name' => "アップロード"), $query->reset;
print $query->end_form;

print "<h3>掃除<\/h3>";
my @filename = $query->param('filename');
if (@filename)
{
print "Deleting ... @filename";
unlink @filename;
}
# find( sub {print "$File::Find::name$/" if (/\.html$/)},$output_directory);
find(\&wanted, $output_directory);


# my @filelist = ("a","b","c");
print "<p>消去するファイルを選んで掃除<\/p>";
print $query->start_form;
print $query->checkbox_group('-name' => 'filename',-values => \@filelist,-columns=>1);
print $query->submit('-name' => "消去"), $query->reset;
print $query->end_form;

print "<h3>ダウンロード<\/h3>";
print $query->start_form(-action => "/cgi-bin/download2.cgi");
print $query->radio_group('-name' => 'file',-values => \@filelist,-columns=>1);
print $query->submit('-name' => "ダウンロード"), $query->reset;
print $query->end_form;

print "<p><a href=\"\/\">戻る<\/a><\/p>";
print $query->end_html;

#--------------------------------------------
#ファイルが見つかる度に呼び出される
#--------------------------------------------
sub wanted{
#  print $File::Find::dir, '/';    #カレントディレクトリ
#  print $_;          #ファイル名
#  print "\n";

  #フルパスのファイル名
push @filelist,$File::Find::name if /\.(png|html)$/si;
}
exit;
