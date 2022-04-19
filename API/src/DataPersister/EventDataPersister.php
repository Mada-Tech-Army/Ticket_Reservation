<?php

namespace App\DataPersister;

use ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface;
use App\Entity\Event;
use Doctrine\ORM\EntityManagerInterface;

final class EventDataPersister implements ContextAwareDataPersisterInterface {

    public function __construct(private EntityManagerInterface $em)
    {
    }
    
    public function supports($data, array $context = []): bool 
    {
        return $data instanceof Event;
    }

    public function persist($data, array $context = []) {

        if($context['collection_operation_name'] === 'post'){
            $data->setNumEvent('E_'.date_format($data->getDateEvent(), 'dmY'));
            $this->em->persist($data);
        }

        if($context['item_operation_name'] === 'put'){
            // send email to client while modifying an event
        }

        $this->em->flush();

        return $data;
    }

    public function remove($data, array $context = []) {
        $this->em->remove($data);
        $this->em->flush();
    }
}