$(document).ready(function($)
{
    function siteTabs(tab)
    {
        let $Tabs = $('[data-tabs="' + tab + '"]');

        if($Tabs.length)
        {
            $Tabs.find('[data-tab-item]').click(function(e){
                e.preventDefault();

                $Tabs.find('[data-tab-item]').map(function(i, o){
                    $(o).removeClass('active');
                });
                $(this).addClass('active');

                $Tabs.find('[data-tab-content]').map(function(i, o){
                    $(o).removeClass('active');
                });
                $Tabs.find('[data-tab-content="' + $(this).data('tab-item') + '"]').addClass('active');
            });
        }
    }

    siteTabs('tabs');
});